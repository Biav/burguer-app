import * as actionTypes from './actions';
import axios from '../../axios-order';

const API_KEY = "AIzaSyAGAKMjbE8Aosbl0zRE4M5BBX8qTFkjysk";

export const loginUser = (user, token) => {
    return {
        type: actionTypes.loginUser,
        user: user,
        token: token
    }
}

export const loginStart = (user, password, isSignUp) => {
    return dispatch => {
        let login = {
            email: user,
            password: password,
            returnSecureToken: true
        }

        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY;

        if(isSignUp) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;
        }
        
        debugger

        axios.post(url, login)
        .then((res)=>{
            debugger
            console.log(res.data);
            dispatch(loginUser(res.data.email, res.data.idToken));
        })
        .catch((err)=> {
            console.error(err);
            dispatch(loginFailed(err.response.status));
        })
    }
}

export const loginFailed = (err) => {
    return {
        type: actionTypes.loginFailed,
        error: err
    }
}

export const logoutUser = () => {
    return {
        type: actionTypes.logoutUser
    }
}