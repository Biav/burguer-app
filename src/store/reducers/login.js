import * as actionsTypes from '../actions/actions';

const initialSate = {
    user: '',
    password: '',
    userId: '',
    token: '',
    error: ''
}

const reducer = (state = initialSate, action) => {

    switch(action.type) {
        case actionsTypes.loginUser:
            return {
                ...state,
                userId: action.userId,
                token: action.token
            }
        
        case actionsTypes.loginFailed:
            return {
                ...state,
                error: action.error
            }

        case actionsTypes.logoutUser:
            return  {
                ...state
            }
        
        default:
            return {
                ...state
            }
    }
}

export default reducer;