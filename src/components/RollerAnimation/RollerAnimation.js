import { blue } from '@material-ui/core/colors';
import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animations/roller.json'




function RollerAnimation() {
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
        height={70}
        width={100}
        color={blue}
        style={{marginLeft: '500px', marginBottom: '100px;', marginTop: '10px;'}}
      />
            
        </div>
    )
}

export default RollerAnimation;
