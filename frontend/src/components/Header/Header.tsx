import React from 'react';
import './Header.css';
import hedgehogImage from '../../assets/hedgehog.png';


const Header: React.FC = () => {
    return (
    <header className="header">
            <ul className="buttons">
                <li><a href="#"><img src={hedgehogImage} alt="Hedgehog" className="HedgehogLogo"/></a></li>
                <li className="ItemMenu"><a href="#">Connexion</a></li>
                <li className="ItemMenu"><a href="#">Calendrier</a></li>
                <li className="ItemMenu"><a href="#">Objectifs</a></li>
            </ul>
    </header>
    );
};

export default Header;
