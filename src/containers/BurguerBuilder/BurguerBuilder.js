import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliar';
import Burguer from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import { Message } from 'semantic-ui-react'
import './BurguerBuilder.css';
import * as burgerBuilderAction from '../../store/actions/';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import axios from '../../axios-order';

class BurguerBuilder extends Component {

    componentDidMount () {
      this.props.initIngredients();
    }

    purchaseOrder = () => {
        if(this.props.token) {
            this.props.history.push("/checkout");
        } else {
            this.props.history.push("/");
        }
    }

    render(){

        let showIngredients;
        
        if (!this.props.error) {
            showIngredients = (
            <Aux>
                <Burguer ingredients = { this.props.ingredients } />
                <p> Current price: <b> ${ this.props.price } </b> </p>
                <BurgerControls ingredients = {this.props.ingredients}
                    addIngredient = { this.props.addIngredientHandler } 
                    removeIngredient = { this.props.removeIngredientHandler } 
                    currentPrice = { this.props.price }
                    cancelBurger = { this.props.cancelBurgerHandler }
                    loading = { this.props.loading }
                    purchaseOrder = { this.purchaseOrder }/>
            </Aux>);

        } else {
            showIngredients = <Message class="alert"> { this.props.error } </Message>;
        }

        return (
            <Aux>
                { showIngredients }
            </Aux>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price,
        error: state.burgerBuilder.error,
        token: state.loginUser.token,
        loading: state.burgerBuilder.loading
    }
}

const mapDispatchToProps = dispacth => {
    return {
        addIngredientHandler: (ingredient) => dispacth(burgerBuilderAction.addIngredients(ingredient)),
        removeIngredientHandler: (ingredient) => dispacth(burgerBuilderAction.removeIngredientHandler(ingredient)),
        cancelBurgerHandler: () => dispacth(burgerBuilderAction.cancelBurger()),
        initIngredients: () => dispacth(burgerBuilderAction.initIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurguerBuilder, axios));