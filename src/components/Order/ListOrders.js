import React, {Component} from 'react';
import Aux from './../../hoc/Auxiliar';
import axios from './../../axios-order';
import ListOrder from './../Order/ListOrder/ListOrder';
import * as ordersAction from '../../store/actions';
import { connect } from 'react-redux';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';

class ListOrders extends Component {

    componentDidMount(){
        this.props.initOrders(this.props.token, this.props.userId);
    }

    render(){
        
        let listOrders = [];

        if( this.props.orders && this.props.orders.length > 0) {
            listOrders =  this.props.orders.map((orders)=> {
                return (<ListOrder key = { orders.id }  id = { orders.id } 
                        name = { orders.name }
                        ingredients = {orders.ingredients }
                        total = {orders.total }/>)
                })
        } else {
            listOrders = <h2>No Orders</h2>
        }

        return(
            <Aux>
                <div className="list-orders">
                    { listOrders }
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.listOrders.orders,
        userId: state.loginUser.userId,
        token: state.loginUser.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initOrders: (token, userId) => dispatch(ordersAction.initOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ListOrders, axios));