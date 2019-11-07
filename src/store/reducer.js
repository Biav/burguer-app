const initialState = {
    ingredients: {
        salad: {
            total: 0,
            price: 0.4
        },
        cheese: {
            total: 0,
            price: 1
        },
        meat: {
            total: 0,
            price: 2
        },
        bacon: {
            total: 0,
            price: 2
        }
    },
    error: null,
    loading: false, 
    price: 4
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case "ADD_INGREDIENT":
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

        case "REMOVE_INGREDIENT": 
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
        
        case "CANCEL_BURGER":
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

