import React from 'react';
import style from './style.css';

const Backdrop = ({show, closeModal}) => {
    return (
        show &&
        <div className={style.Backdrop} onClick={closeModal}/>
    );
};

export default Backdrop;