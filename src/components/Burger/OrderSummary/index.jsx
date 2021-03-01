import React from 'react';
import Button from "../../UI/Button";
import PropTypes from 'prop-types';

const OrderSummary = ({ingredients, cancelOrder, continueOrder, price}) => {
    const ingredientsList = Object.keys(ingredients).map((iKey) => {
        return <li key={iKey}>
            <span
                style={{textTransform: 'capitalize'}}>{iKey}</span>: {ingredients[iKey]}
        </li>
    });

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsList}
            </ul>
            <p><strong>Total Price: {price.toFixed(2)}€</strong></p>
            <p>Continue to checkout?</p>
            <Button click={cancelOrder} btnType={'Danger'}>Cancel</Button>
            <Button click={continueOrder} btnType={'Success'}>Continue</Button>
        </React.Fragment>
    );
};

OrderSummary.propTypes = {
    ingredients: PropTypes.shape({}),
    cancelOrder: PropTypes.func,
    continueOrder: PropTypes.func,
    price: PropTypes.number,
};

export default OrderSummary;