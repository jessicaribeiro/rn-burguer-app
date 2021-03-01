import React from 'react';
import style from './style.css';
import Backdrop from "../Backdrop";

const Modal = ({children, show, closeModal}) => {
    return (
        <React.Fragment>
            <Backdrop show={show} closeModal={closeModal}/>
            <div className={style.Modal} style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}>
                {children}
            </div>
        </React.Fragment>
    );
};

export default Modal;