import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngredient from "./BurgerIngredient";
import style from './style.css';

const Burger = ({ingredients}) => {

    let arrayIngredients = Object.keys(ingredients).map(iKey =>
        {
            return [...Array(ingredients[iKey])].map((_, index) => {
                return <BurgerIngredient type={iKey} key={index + iKey}/>
            })
        }
    ).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (arrayIngredients.length === 0) {
        arrayIngredients = <p>Please start adding ingredients!</p>
    }


    return (
        <div className={style.Burger}>
            <BurgerIngredient type="bread-top"/>
            {arrayIngredients}
            {/*<BurgerIngredient type="cheese"/>*/}
            {/*<BurgerIngredient type="meat"/>*/}
            <BurgerIngredient type="bread-bottom"/>
        </div>

    );
};

Burger.proptypes = {
    ingredients: PropTypes.shape({}),
};

export default Burger;