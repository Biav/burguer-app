import * as actionTypes from './actions';
import axios from '../../axios-order';

export const listOrders = (orders) => {
    return {
        type: actionTypes.listOrders,
        orders: orders
    }
}

export const failedOrders = (error) => {
    return {
        type: actionTypes.failedOrders,
        error: error
    }
}

export const initOrders = (token) => {
    return dispatch => {
        let orders, listOrder = [];

        axios.get('/order.json?auth=' + token)
        .then((res) => {
           orders = res.data;

           listOrder = Object.keys(orders).map((item) => {
              return ({
                   id: item,
                   name: orders[item].user.name,
                   ingredients: orders[item].ingredients,
                   total: orders[item].price
               });
           });

           dispatch(listOrders(listOrder));
           
        }).catch((err) => {
            dispatch(failedOrders(err));
            console.error(err);
           }
        );
    }
}
