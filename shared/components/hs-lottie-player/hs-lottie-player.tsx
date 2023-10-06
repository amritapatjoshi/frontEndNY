import React from "react"
import Lottie from "react-lottie-player"

interface ILottiePlayerProps {
    animationData: any;
    loop?: boolean; // Make loop and play optional
    play?: boolean;
}

function LottiePlayer({ animationData, loop, play }: ILottiePlayerProps) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop === undefined ? false : loop}
      play={play === undefined ? false : play}
    />
  )
}

export default LottiePlayer
