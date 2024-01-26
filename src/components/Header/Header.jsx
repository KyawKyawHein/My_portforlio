import React from 'react';
import CTA from './CTA';
import './header.css';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header id="home">
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Kyaw Kyaw Hein</h1>
                <h5 className="text-light">Junior Web Developer</h5>
                <CTA />
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
                <HeaderSocials />
            </div>
        </header>

    )
}

export default Header;