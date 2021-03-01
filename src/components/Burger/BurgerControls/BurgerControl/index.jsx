import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const BurgerControl = ({label, add, remove, disabled}) => {
    return (
        <div className={style.BuildControl}>
            <div className={style.Label}>{label}</div>
            <button disabled={disabled} className={style.Less} onClick={remove}>Less</button>
            <button className={style.More} onClick={add}>More</button>
        </div>
    );
};

BurgerControl.propTypes = {
    label: PropTypes.string,
    add: PropTypes.func,
    remove: PropTypes.func,
    disabled: PropTypes.bool,
};

export default BurgerControl;