import * as actionTypes from './orderActions';
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

export const initOrders = () => {
    return dispatch => {
        let orders, listOrder = [];

        axios.get('/order.json')
        .then((res) => {
           orders = res.data;

           Object.keys(orders).map((order) => {
               listOrder.push({
                   id: order,
                   name: orders[order].user.name,
                   ingredients: orders[order].ingredients,
                   total: orders[order].price
               });
           });

           console.log(listOrder);
           dispatch(listOrders(listOrder));
           
        }).catch((err) => {
            dispatch(failedOrders(err));
            console.error(err);
           }
        );
    }
}
