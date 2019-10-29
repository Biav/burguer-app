import React, {Component} from 'react';
import Aux from './../../hoc/Auxiliar';
import axios from './../../axios-order';
import ListOrder from './../Order/ListOrder';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';

class ListOrders extends Component {

    state = {
        orders: [], 
        listOrder: []
    }

    componentDidMount(){
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
                   return; 
                });

                this.setState({
                    listOrder: listOrder
                })

                console.log(listOrder);

                
             }).catch((err) => {
                console.error(err);
                }
             );
    }
    
    render(){
        return(
            <Aux>
                {
                    this.state.listOrder.map((orders)=> (
                        <ListOrder id = { orders.id } 
                                   name = { orders.name }
                                   ingredients = {orders.ingredients }
                                   total = {orders.total }/>
                    ))
                }
            </Aux>
        );
    }
}

export default withErrorHandler(ListOrders, axios);