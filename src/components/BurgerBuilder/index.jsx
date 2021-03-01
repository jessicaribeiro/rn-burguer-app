import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Burger from '../Burger';
import BurgerControls from "../Burger/BurgerControls";
import ol from "eslint-plugin-jsx-a11y/lib/util/implicitRoles/ol";
import Modal from "../UI/Modal";
import OrderSummary from "../Burger/OrderSummary";


const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 1,
    cheese: 0.7,
    meat: 1.5
};

const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState(
        {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    );

    const [price, setPrice] = useState(5);

    const [canOrder, setCanOrder] = useState(false);
    const [isOrdering, setIsOrdering] = useState(false);


    const orderingHandler = () => {
      setIsOrdering(true);
    };

    const cancelOrderingHandler = () => {
      setIsOrdering(false);
    };

    const continueOrderingHandler = () => {
      alert('Thanks!')
    };

    const updatePurchase = (actualIngredients) => {
        const sum = Object.keys(actualIngredients).map(iKey => {
            return ingredients[iKey]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        setCanOrder(sum > 0);
    };

    const addIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...ingredients,
        };
        updatedIngredients[type] = updatedCount;
        setIngredients(updatedIngredients);

        const priceTotal = price + INGREDIENT_PRICES[type];
        setPrice(priceTotal);
        updatePurchase(updatedIngredients);
    };

    const removeIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...ingredients,
            };
            updatedIngredients[type] = updatedCount;
            setIngredients(updatedIngredients);

            const priceTotal = price - INGREDIENT_PRICES[type];
            setPrice(priceTotal);
            updatePurchase(updatedIngredients);
        }
    };

    const disableInfo = {
        ...ingredients,
    };

    for (let key in disableInfo) {
        disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
        <React.Fragment>
            <Modal show={isOrdering} closeModal={cancelOrderingHandler}>
                <OrderSummary ingredients={ingredients} price={price} cancelOrder={cancelOrderingHandler} continueOrder={continueOrderingHandler}/>
            </Modal>
            <Burger ingredients={ingredients}/>
            <BurgerControls
                disableInfo={disableInfo}
                addIngredient={addIngredientHandler}
                removeIngredient={removeIngredientHandler}
                price={price}
                canOrder={canOrder}
                order={orderingHandler}
            />
        </React.Fragment>
    );
};

BurgerBuilder.propTypes = {};

export default BurgerBuilder;