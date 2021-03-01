import React from 'react';
import style from './style.css';

const Button = ({children, click, btnType}) => {
    return (
        <button
            onClick={click}
            className={[style.Button, style[btnType]].join(' ')}
        >{children}</button>
    );
};

export default Button;