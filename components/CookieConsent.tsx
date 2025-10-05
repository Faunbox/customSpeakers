"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, Settings } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useCookieConsent } from "@/app/[locale]/contexts/CookieConsentContext"
import { useTranslations } from "next-intl"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { cookieSettings, updateCookieSettings, acceptAllCookies, rejectAllCookies } = useCookieConsent()

  useEffect(() => {
    // Check if user has already made their choice
    const hasChoice = localStorage.getItem("cookieChoiceMade")
    if (!hasChoice) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    acceptAllCookies()
    setShowBanner(false)
    localStorage.setItem("cookieChoiceMade", "true")
  }

  const handleRejectAll = () => {
    rejectAllCookies()
    setShowBanner(false)
    localStorage.setItem("cookieChoiceMade", "true")
  }

  const handleSavePreferences = () => {
    updateCookieSettings(cookieSettings)
    setShowBanner(false)
    setIsDialogOpen(false)
    localStorage.setItem("cookieChoiceMade", "true")
  }

  const t = useTranslations("Cookie")

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800 shadow-2xl z-50 overflow-hidden"
          >
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gray-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto p-6 relative">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1 flex items-start gap-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 p-3 rounded-full border border-gray-600">
                      <Cookie className="w-6 h-6 text-gray-300" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold mb-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                      {t("title")}
                    </h2>
                    <p className="text-sm text-gray-400 leading-relaxed">{t("message")}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="group relative overflow-hidden border-gray-700 bg-transparent hover:bg-gray-900 text-gray-300 hover:text-white transition-all duration-300"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <Settings className="w-4 h-4" />
                          {t("settings")}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-700/0 via-gray-600/20 to-gray-700/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-gray-950 border-gray-800">
                      <DialogHeader>
                        <DialogTitle className="text-gray-200">{t("settings")}</DialogTitle>
                        <DialogDescription className="text-gray-400">{t("settingsConent")}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
                          <div className="space-y-0.5 flex-1">
                            <label className="text-sm font-medium text-gray-200">
                              {t("categories.necessary.title")}
                            </label>
                            <p className="text-xs text-gray-500">{t("categories.necessary.description")}</p>
                          </div>
                          <Switch checked={cookieSettings.necessary} disabled />
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
                          <div className="space-y-0.5 flex-1">
                            <label className="text-sm font-medium text-gray-200">
                              {t("categories.analytics.title")}
                            </label>
                            <p className="text-xs text-gray-500">{t("categories.analytics.description")}</p>
                          </div>
                          <Switch
                            checked={cookieSettings.analytics}
                            onCheckedChange={(checked) => updateCookieSettings({ analytics: checked })}
                          />
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
                          <div className="space-y-0.5 flex-1">
                            <label className="text-sm font-medium text-gray-200">
                              {t("categories.marketing.title")}
                            </label>
                            <p className="text-xs text-gray-500">{t("categories.marketing.description")}</p>
                          </div>
                          <Switch
                            checked={cookieSettings.marketing}
                            onCheckedChange={(checked) => updateCookieSettings({ marketing: checked })}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          onClick={handleSavePreferences}
                          className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border border-gray-600 shadow-lg hover:shadow-gray-500/20 transition-all duration-300"
                        >
                          {t("save")}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Button
                    onClick={handleRejectAll}
                    variant="outline"
                    className="border-gray-700 bg-transparent hover:bg-gray-900 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    {t("decline")}
                  </Button>

                  <Button
                    onClick={handleAcceptAll}
                    className="group relative overflow-hidden bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border border-gray-600 shadow-lg hover:shadow-gray-500/30 transition-all duration-300"
                  >
                    <span className="relative z-10">{t("accept")}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500/0 via-gray-400/20 to-gray-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showBanner && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="group fixed bottom-6 right-6 bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-full shadow-xl border border-gray-600 hover:border-gray-500 transition-all duration-300 z-50"
          onClick={() => setShowBanner(true)}
          aria-label="Cookie Settings"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
          <Cookie className="w-5 h-5 text-gray-300 relative z-10" />
        </motion.button>
      )}
    </>
  )
}
