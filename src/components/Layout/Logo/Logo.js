import React from 'react';
import burgerLogo from '../../../assets/burger-logo.png'
import './Logo.css';

const logo = (props) => (
    <div>
        <img className="logo" src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;