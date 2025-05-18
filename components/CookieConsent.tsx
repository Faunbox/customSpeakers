"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCookieConsent } from "@/app/[locale]/contexts/CookieConsentContext";
import { useTranslations } from "next-intl";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    cookieSettings,
    updateCookieSettings,
    acceptAllCookies,
    rejectAllCookies,
  } = useCookieConsent();

  useEffect(() => {
    // Check if user has already made their choice
    const hasChoice = localStorage.getItem("cookieChoiceMade");
    if (!hasChoice) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setShowBanner(false);
    localStorage.setItem("cookieChoiceMade", "true");
  };

  const handleRejectAll = () => {
    rejectAllCookies();
    setShowBanner(false);
    localStorage.setItem("cookieChoiceMade", "true");
  };

  const handleSavePreferences = () => {
    updateCookieSettings(cookieSettings);
    setShowBanner(false);
    setIsDialogOpen(false);
    localStorage.setItem("cookieChoiceMade", "true");
  };

  const t = useTranslations("Cookie");

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 shadow-lg z-50"
          >
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold mb-2 text-purple-500">
                    {t("title")}
                  </h2>
                  <p className="text-sm text-gray-300">{t("message")}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button>{t("settings")}</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{t("settings")}</DialogTitle>
                        <DialogDescription>
                          {t("settingsConent")}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <label className="text-sm font-medium">
                              {t("categories.necessary.title")}
                            </label>
                            <p className="text-xs text-muted-foreground">
                              {t("categories.necessary.description")}
                            </p>
                          </div>
                          <Switch checked={cookieSettings.necessary} disabled />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <label className="text-sm font-medium">
                              {t("categories.analytics.title")}
                            </label>
                            <p className="text-xs text-muted-foreground">
                              {t("categories.analytics.description")}
                            </p>
                          </div>
                          <Switch
                            checked={cookieSettings.analytics}
                            onCheckedChange={(checked) =>
                              updateCookieSettings({ analytics: checked })
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <label className="text-sm font-medium">
                              {t("categories.marketing.title")}
                            </label>
                            <p className="text-xs text-muted-foreground">
                              {t("categories.marketing.description")}
                            </p>
                          </div>
                          <Switch
                            checked={cookieSettings.marketing}
                            onCheckedChange={(checked) =>
                              updateCookieSettings({ marketing: checked })
                            }
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={handleSavePreferences}>{t("save")}</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button onClick={handleRejectAll}>{t("decline")}</Button>
                  <Button variant="outline" onClick={handleAcceptAll}>
                    {t("accept")}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button to reopen cookie settings */}
      {!showBanner && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-4 right-4 bg-purple-700 p-3 rounded-full shadow-lg hover:bg-purple-500 transition-colors z-50"
          onClick={() => setShowBanner(true)}
          aria-label="Cookie Settings"
        >
          <X className="w-5 h-5" />
        </motion.button>
      )}
    </>
  );
}
