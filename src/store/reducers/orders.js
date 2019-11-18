const initialState = {
    orders: [], 
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_ORDERS":
            return {
                ...state,
                orders: action.orders
            }
        case "FAILED_ORDERS":
            return {
                ...state,
                error: action.error
            }
        default: 
            return state;
    }
}

export default reducer;