import React from 'react'

import logo from '../assets/images/logo_128.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>WizNotePlus</h1>
        <p>A cross-platform personal knowledge and <br />
        time management application.</p>
    </header>
)

export default Header
