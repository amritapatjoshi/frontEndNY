import React from 'react';
import Lottie from 'react-lottie-player';
interface LottiePlayerProps {
    animationData: any;
    // default value of loop and play is false
    loop: boolean;
    play: boolean;
}
function LottiePlayer({ animationData, loop, play }: LottiePlayerProps) {
    return (
        <Lottie
            animationData={animationData}
            loop={false}
            play={false}
        />
    );
}
export default LottiePlayer;
