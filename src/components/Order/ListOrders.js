import React, {Component} from 'react';
import Aux from './../../hoc/Auxiliar';
import axios from './../../axios-order';
import ListOrder from './../Order/ListOrder/ListOrder';
import * as ordersAction from '../../store/actions';
import { connect } from 'react-redux';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';

class ListOrders extends Component {

    componentDidMount(){
        this.props.initOrders(this.props.token);
    }
    
    render(){
        let listOrders = []; 

        if( this.props.orders ) {
            listOrders =  this.props.orders.map((orders)=> {
                return (<ListOrder key = { orders.id }  id = { orders.id } 
                        name = { orders.name }
                        ingredients = {orders.ingredients }
                        total = {orders.total }/>)
                })
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
        token: state.loginUser.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initOrders: (token) => dispatch(ordersAction.initOrders(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ListOrders, axios));