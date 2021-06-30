import React from 'react'
import WelcomeAnimation from '../WelcomAnimation/WelcomAnimation'
import './Welcome.css'
function Welcome() {
    return (
        <div className="welcome-div">
        <main style={{marginLeft: '100px'}} className="main">
        <h2  style={{marginLeft: '100px'}}>Welcome to our site! </h2>
        <p  style={{marginLeft: '100px'}} className="welcome_p"> Thank You for taking an interest in 
        Restored Painting Co. Our services offer 
        professional quality work.<br></br> <p>Clean and Meticulous 
        application of quality products are essential
        to restoring and expanding the life of surface areas. From
        preperation to application to clean up, Restored applicationto clean up, 
        Restored Painting ensures a job done right!</p>Customer satisfaction
        is our #1 desire. Sometimes, we can get caught up in the hussle and bussle
        of everyday life. However, Restored Painting Co. will go above and
        beyond. We strive to maintain a spirit of excellence with every job!
        
          </p>
          <WelcomeAnimation  />
      </main>
     
        </div>
    )
}

export default Welcome
