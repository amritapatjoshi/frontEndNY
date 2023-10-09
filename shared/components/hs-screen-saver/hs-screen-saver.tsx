"use client"
import React, { useState, useEffect, useCallback } from "react"
import styles from "./hs-screen-saver.module.scss"
import screensaverLottieJson from "@/public/lottie-files/Screensaver BG.json"
import Image from "next/image"
import LottiePlayer from "../hs-lottie-player/hs-lottie-player"
import { SCREENSAVER_TIMEOUT } from "./constants"

function Screensaver() {
  const [isScreensaverActive, setIsScreensaverActive] = useState(false)
  const [screensaverTimeoutId, setScreensaverTimeoutId] = useState<NodeJS.Timeout | null>(null)
  const [showPopup, setShowPopup] = useState(false)

  function startScreensaverTimeout() {
    const timeoutId = setTimeout(function () {
      setIsScreensaverActive(true)
      setShowPopup(true)
    }, SCREENSAVER_TIMEOUT)

    setScreensaverTimeoutId(timeoutId)
  }

  const resetScreensaverTimeout = useCallback(function () {
    setIsScreensaverActive(false)
    setShowPopup(false)
    if (screensaverTimeoutId) {
      clearTimeout(screensaverTimeoutId)
    }
    startScreensaverTimeout()
  }, [screensaverTimeoutId])

  useEffect(function () {
    window.addEventListener("mousemove", resetScreensaverTimeout)
    window.addEventListener("keydown", resetScreensaverTimeout)
    window.addEventListener("touchstart", resetScreensaverTimeout)

    // Cleanup function
    return function () {
      window.removeEventListener("mousemove", resetScreensaverTimeout)
      window.removeEventListener("keydown", resetScreensaverTimeout)
      window.removeEventListener("touchstart", resetScreensaverTimeout)
      if (screensaverTimeoutId) {
        clearTimeout(screensaverTimeoutId)
      }
    }
  }, [resetScreensaverTimeout, screensaverTimeoutId])

  return (
    <div>
      {isScreensaverActive && (
        <div className={`${styles.screensaverPopup} ${showPopup ? styles.active : ""}`}>
          <LottiePlayer
            loop
            animationData={screensaverLottieJson}
            play
            className="lottieAnimation"
          />
          <Image
            src="/images/HyosungLogo.svg"
            alt="Logo"
            className={styles.centerImage}
            width={240}
            height={32}
          />
        </div>
      )}
    </div>
  )
}

export default Screensaver
