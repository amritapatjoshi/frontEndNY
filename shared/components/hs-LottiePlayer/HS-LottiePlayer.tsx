import React from 'react';
import Lottie from 'react-lottie-player';
interface LottiePlayerProps {
    animationData: any;
    loop: boolean;
    play: boolean;
}
function LottiePlayer({ animationData, loop, play }: LottiePlayerProps) {
    return (
        <Lottie
            loop={loop}
            animationData={animationData}
            play={play}
        />
    );
}
export default LottiePlayer;
