"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import * as Sentry from "@sentry/nextjs";

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentContextType {
  cookieSettings: CookieSettings;
  updateCookieSettings: (newSettings: Partial<CookieSettings>) => void;
  acceptAllCookies: () => void;
  rejectAllCookies: () => void;
}

const defaultSettings: CookieSettings = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
};

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cookieSettings, setCookieSettings] =
    useState<CookieSettings>(defaultSettings);

  useEffect(() => {
    const savedSettings = Cookies.get("cookieSettings");
    if (savedSettings) {
      setCookieSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    // Apply settings whenever they change
    applySettings(cookieSettings);
  }, [cookieSettings]);

  const updateCookieSettings = (newSettings: Partial<CookieSettings>) => {
    const updatedSettings = { ...cookieSettings, ...newSettings };
    setCookieSettings(updatedSettings);
    Cookies.set("cookieSettings", JSON.stringify(updatedSettings), {
      expires: 365,
    });
  };

  const acceptAllCookies = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setCookieSettings(allAccepted);
    Cookies.set("cookieSettings", JSON.stringify(allAccepted), {
      expires: 365,
    });
  };

  const rejectAllCookies = () => {
    setCookieSettings(defaultSettings);
    Cookies.set("cookieSettings", JSON.stringify(defaultSettings), {
      expires: 365,
    });
  };

  const applySettings = (settings: CookieSettings) => {
    // Necessary cookies are always enabled

    // Google Tag Manager
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({
        event: "cookie_consent_update",
        analytics_storage: settings.analytics ? "granted" : "denied",
        ad_storage: settings.marketing ? "granted" : "denied",
      });
    }

    // Sentry
    if (settings.analytics) {
      Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        tracesSampleRate: 1.0,
      });
    } else {
      Sentry.close();
    }

    // Remove cookies if consent is revoked
    if (!settings.analytics) {
      // Remove Google Analytics cookies
      Cookies.remove("_ga");
      Cookies.remove("_gid");
      Cookies.remove("_gat");
    }

    if (!settings.marketing) {
      // Remove Facebook Pixel cookies
      Cookies.remove("_fbp");
      Cookies.remove("fr");
    }
  };

  return (
    <CookieConsentContext.Provider
      value={{
        cookieSettings,
        updateCookieSettings,
        acceptAllCookies,
        rejectAllCookies,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};
