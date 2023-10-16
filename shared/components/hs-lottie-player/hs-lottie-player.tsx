import React from "react"
import Lottie from "react-lottie-player"
import ILottiePlayerProps from "./hs-lottie-player-interface"

function LottiePlayer({ animationData, loop, play, className }: ILottiePlayerProps) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop === undefined ? false : loop}
      play={play === undefined ? false : play}
      className={className}
    />
  )
}

export default LottiePlayer
