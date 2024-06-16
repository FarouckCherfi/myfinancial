import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
    <header className="header">
            <img src="../assets/logo.svg" alt="Company Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/signIn'>Sign In</a></li>

                </ul>
            </nav>
    </header>
    );
};

export default Header;
