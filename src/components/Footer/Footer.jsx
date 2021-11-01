import React from 'react'
import './Footer.css'
import Logo from './img/LEO-logo.png'

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="logo" className="footer_logo"/>
            <div className="footer_text">
                <p>© Copyright LEO Pharma 2020<br/>
                LEO and the LEO Lion Design<br/>
                are registered trademarks<br/>
                of LEO Pharma<br/>
                All rights reserved</p>
<p className="footer_text_link">LEO Pharma corporate website</p>
            </div>
            <div className="clear"></div>
            <div className="footer_links">
                <a>Contact</a>
                <p>|</p>

                <a>Imprint</a>
                <p>|</p>

                <a>Conditions</a>
                <p>|</p>

                <a>Terms of use</a>
                <p>|</p>

                <a>Privacy</a>
                <p>|</p>

                <a>Cookie content</a>
                
                
            </div>
        </footer>
    )
}

export default Footer
