import React from 'react'
import Image from '../Videos/rest.png'
import './Logo.css'

function Logo() {
    return (
        <div className="logo_div">
      
        <img className="logo" src={Image} alt="" />  <hr className="hr"/><br></br>
        <h2 className="h1"> Painting Done With Excellence!</h2>
        </div>
    )
}

export default Logo
