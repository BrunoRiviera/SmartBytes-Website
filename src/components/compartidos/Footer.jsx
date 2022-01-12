import React from "react";
import '../../css/Footer.css';


function Footer () {
    return(
        <div className="footer-div center-cc">
            <img src={require('../../img/footerlogo.png')} alt="footer logo" className="footer"></img>
        </div>
    )
}

export default Footer;