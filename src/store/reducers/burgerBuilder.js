import * as actionsTypes from '../actions/actions';

const initialState = {
    ingredients: {},
    error: null,
    loading: false, 
    price: 4
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case actionsTypes.addIngredients:
            let burgerIngredients = {
                ...state.ingredients
            };
            
            burgerIngredients[action.ingredient].total += 1;
    
            let priceTotal = parseFloat(state.price)
                                + burgerIngredients[action.ingredient].total 
                                * parseFloat(burgerIngredients[action.ingredient].price);

            return {
                ...state,
                ingredients: burgerIngredients,
                price: (priceTotal).toFixed(2)
            }

        case actionsTypes.removeIngredients: 
            let burgerIngDelete = {
                ...state.ingredients
            }

            burgerIngDelete[action.ingredient].total = (burgerIngDelete[action.ingredient].total > 0) ? 
                                                        burgerIngDelete[action.ingredient].total - 1 : 0;

            let priceTotalDelete = parseFloat(state.price)
                            - parseFloat(burgerIngDelete[action.ingredient].price);

            return {
                ...state,
                ingredients: burgerIngDelete,
                price: (priceTotalDelete).toFixed(2)
            }
        
        case actionsTypes.setIngredients: 
            return {
                ...state,
                ingredients: action.ingredients,
                error: false
            }
        case actionsTypes.errorIngredients:
            return {
                ...state,
                error: action.error
            }
        case actionsTypes.cancelBurger:
            let ingredients = {
                ...initialState.ingredients
            };

    
            Object.keys(ingredients).map((ingredient)=>{
                return ingredients[ingredient].total = 0;
            });
    
            return {
                ...initialState,
                ingredients: ingredients
            }

        default:
            return {
                ...state
            }
    }

}

export default reducer;

