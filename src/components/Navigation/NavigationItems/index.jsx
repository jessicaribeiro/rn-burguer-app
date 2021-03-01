import React from 'react';
import NavigationItem from "./NavigationItem";
import style from './style.css';

const NavigationItems = () => {
    return (
        <ul className={style.NavigationItems}>
            <NavigationItem link="/" active>Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    );
};

export default NavigationItems;