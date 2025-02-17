"use client"

import { useCallback } from "react"
import { sendGTMEvent } from "@next/third-parties/google"

export const useGtagSendEvent = () => {
  const gtagSendEvent = useCallback((url: string) => {
    const callback = () => {
      if (typeof url === "string") {
        window.location.href = url
      }
    }

    sendGTMEvent({
      event: "conversion_event_submit_lead_form",
      event_callback: callback,
      event_timeout: 2000,
      // Add any additional event parameters here
    })

    return false
  }, [])

  return gtagSendEvent
}

