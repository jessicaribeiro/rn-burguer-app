import React from 'react';

import logo from '../../assets/images/burger-logo.png';
import style from './style.css';

const Logo = () => {
    return (
        <div className={style.Logo}>
            <img src={logo} alt="MyBurger"/>
        </div>)
};

export default Logo;