import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import BurgerControl from './BurgerControl';

const BurgerControls = ({disableInfo, addIngredient, removeIngredient, price, canOrder, order}) => {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'},

    ];

    return (
        <div className={style.BuildControls}>
            <p>Price: <strong>{price.toFixed(2)}€</strong></p>
            {controls.map(control => {
                return <BurgerControl
                    add={() => addIngredient(control.type)}
                    remove={() => removeIngredient(control.type)}
                    label={control.label}
                    key={control.label}
                    disabled={disableInfo[control.type]}
                />
            })}
            <button disabled={!canOrder} className={style.OrderButton} onClick={order}>Order Now</button>
        </div>
    );
};

BurgerControls.propTypes = {
    disableInfo: PropTypes.shape({}),
    addIngredient: PropTypes.func,
    removeIngredient: PropTypes.func,
    price: PropTypes.number,
    canOrder: PropTypes.bool,
};

export default BurgerControls;