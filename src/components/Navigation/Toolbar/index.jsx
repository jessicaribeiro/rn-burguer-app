import React from 'react';
import style from './style.css';
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";

const Toolbar = () => {
    return (
        <header className={style.Toolbar}>
            <div>Menu</div>
            <Logo/>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;