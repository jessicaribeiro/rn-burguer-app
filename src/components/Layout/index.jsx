import React from 'react';
import classes from './style.css';
import Toolbar from "../Navigation/Toolbar";

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Toolbar/>
            <main className={classes.Content}>
                {children}
            </main>
        </React.Fragment>
    );
};


export default Layout;