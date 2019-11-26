import * as actionsTypes from '../actions/actions';

const initialState = {
    orders: [], 
    error: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionsTypes.listOrders:
            return {
                ...state,
                orders: action.orders
            }
        case actionsTypes.failedOrders:
            return {
                ...state,
                error: action.error
            }
        default: 
            return state;
    }
}

export default reducer;