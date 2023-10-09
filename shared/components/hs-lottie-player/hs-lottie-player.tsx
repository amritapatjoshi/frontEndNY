import React from "react"
import Lottie from "react-lottie-player"

interface ILottiePlayerProps {
  animationData: any;
  loop?: boolean; // Make loop and play optional
  play?: boolean;
  className?: string;
}

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
