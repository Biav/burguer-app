import * as actionTypes from './actions';
import axios from '../../axios-order';

const API_KEY = "AIzaSyAGAKMjbE8Aosbl0zRE4M5BBX8qTFkjysk";

export const loginUser = (user, userId, token) => {
    return {
        type: actionTypes.loginUser,
        user: user,
        userId: userId,
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
        
        return new Promise((resolve, reject) => {
            axios.post(url, login)
            .then((res)=>{
                console.log(res.data);
                let expireLogin = new Date(new Date().getTime() + (res.data.expiresIn * 3000));
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('expireLogin', expireLogin);
                localStorage.setItem('idUser', res.data.localId);
                dispatch(loginUser(res.data.email, res.data.localId, res.data.idToken));
                resolve();
            })
            .catch((err)=> {
                console.error(err);
                dispatch(loginFailed(err.response.status));
            })
        });
        
    }
}

export const checkLogin = () => {
    return dispatch => {
        let token = localStorage.getItem('token'),
            email = localStorage.getItem('email'),
            expireLogin = localStorage.getItem('expireLogin'),
            id = localStorage.getItem('idUser');

        return new Promise((resolve, reject) => {
            if(token && email && Date.parse(expireLogin) > Date.parse(new Date())) {
                dispatch(loginUser(email, id, token));
                resolve(token);
            } else {
                reject(token);
            }
        });

    }
}

export const loginFailed = (err) => {
    return {
        type: actionTypes.loginFailed,
        error: err
    }
}

export const doLogout = () => {
    return dispatch => {
        let token = null;
        let user =  null;
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('expireLogin');
        localStorage.removeItem('idUser');
        dispatch(logoutUser(user, token));
    }
}

export const logoutUser = (user, token) => {
    return {
        type: actionTypes.logoutUser,
        user: user,
        token: token
    }
}