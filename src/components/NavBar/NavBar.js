import React from 'react'
import './NavBar.css'
import RollerAnimation from '../RollerAnimation/RollerAnimation';
import PhoneIcon from '@material-ui/icons/Phone';


function NavBar() {
    return (
        <nav className="header">
            <ul style={{textDecoration: 'none', listStyleType: 'none', display: 'flex', justifyContent: 'space-between'}} className="ul">
            <a style={{width: '500px', textDecoration: 'none', color: 'black', fontSize: '25px', display: 'flex', marginTop: '40px', marginLeft: '700px;' }} href="tel:8654240143">Call Us Today!<br></br><PhoneIcon /> 865-424-0143</a>
              <li  style={{marginTop: '10px', textDecoration: 'none'}}> <RollerAnimation style={{marginLeft: '500px'}} /></li>
            </ul>
        </nav>
    )
}

export default NavBar
