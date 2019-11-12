import * as actionsTypes from './burgerActions';
import axios from '../../axios-order';

export const addIngredients = (ingredient) => {
    return {
        type: actionsTypes.addIngredients,
        ingredient: ingredient
    }
}

export const removeIngredientHandler = (ingredient) => {
    return {
        type: actionsTypes.removeIngredients,
        ingredient: ingredient
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionsTypes.setIngredients,
        ingredients: ingredients
    }
}

export const errorIngredients = (error) => {
    return {
        type: actionsTypes.errorIngredients,
        error: error
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
        .then((response)=>{
            dispatch(setIngredients(response.data));
        }).catch((err) => {
            let error = "Error to load the ingredients";
            dispatch(errorIngredients(error));
        });
    }
}

export const cancelBurger = () => {
    return {
        type: actionsTypes.cancelBurger
    }
}

