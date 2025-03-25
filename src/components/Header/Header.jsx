import React, { useState, useEffect } from "react";
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
            if (window.innerWidth > 800) {
                setMenuOpened(false); // Close menu on desktop view
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="/logo.png" alt="logo" width={100} />
                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <div className={`flexCenter h-menu ${menuOpened && isMobile ? 'menu-open' : ''}`}>
                        <a href="#">Residencies</a>
                        <a href="#">Our Value</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Get started</a>
                        <button className="button">Contact</button>
                    </div>
                </OutsideClickHandler>
                {isMobile && (
                    <div className="menu-icon" onClick={() => setMenuOpened(prev => !prev)} aria-label="Toggle Menu">
                        <BiMenuAltRight size={30} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Header;
