import React from 'react';
import DesktopHeader from './desktopHeader/DesktopHeader';
import './Header.css'
import MobileHeader from './mobileHeader/MobileHeader';

function Header() {
    return (
        <div>
            <div className="d__header-container">
            <DesktopHeader/>
            </div>

            <div className="m__header-container">
            <MobileHeader/>

            </div>

        </div>
    )
}

export default Header
