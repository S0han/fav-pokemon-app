import React from 'react';

import { Link } from 'react-router-dom';

import './header.styles.scss';

import Logo from '../../assets/pokeball.png'

const Header = () => (
    <div className='header'> 
        <Link className="logo-container" to='/'>
            <img src={Logo} className = 'logo' />
        </Link>
        <div className="options">
                <Link className="option" to='/'>
                    HOME
                </Link>
                <Link className="option" to='/about'>
                    ABOUT
                </Link>
                <Link className="option" to='/signin'>
                    SIGN IN
                </Link>
        </div>
    </div>
);

export default Header;