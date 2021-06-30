import { blue } from '@material-ui/core/colors';
import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animations/ManWithRedPencil.json'




function WelcomeAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div className="lottie">
        <Lottie 
        className="lottie"
	    options={defaultOptions}
        height={400}
        width={400}
        color={blue}
        style={{marginLeft: '900px', marginTop: '-400px'}}
      />
            
        </div>
    )
}

export default WelcomeAnimation;