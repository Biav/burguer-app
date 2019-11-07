import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliar';
import Burguer from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import { Message } from 'semantic-ui-react'
import './BurguerBuilder.css';
import * as actionTypes from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import axios from '../../axios-order';

class BurguerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            price: 4,
            loading: false, 
            error: null
        };

        this.initialState = {
            ...this.state
        }
    }

    componentDidMount () {
        axios.get('/ingredients.json')
        .then((response)=>{
            this.setState({
                ingredients: response.data
            })
        }).catch((err) => {
            console.error(err);
            this.setState({
                error: "Error to load the ingredients"
            })
        });
    }

    purchaseOrder = () => {
        this.props.history.push("/checkout");
    }

    render(){

        let showIngredients;
        
        if (!this.state.error) {
            showIngredients = (
            <Aux>
                <Burguer ingredients = { this.props.ingredients } />
                <p> Current price: <b> ${ this.props.price } </b> </p>
                <BurgerControls ingredients = {this.props.ingredients}
                    addIngredient = { this.props.addIngredientHandler } 
                    removeIngredient = { this.props.removeIngredientHandler } 
                    currentPrice = { this.props.price }
                    cancelBurger = { this.props.cancelBurgerHandler }
                    loading = { this.state.loading }
                    purchaseOrder = { this.purchaseOrder }/>
            </Aux>);

        } else {
            showIngredients = <Message class="alert"> { this.state.error } </Message>;
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
        ingredients: state.ingredients,
        price: state.price
    }
}

const mapDispatchToProps = dispacth => {
    return {
        addIngredientHandler: (ingredient) => dispacth({type: actionTypes.addIngredients, ingredient: ingredient}),
        removeIngredientHandler: (ingredient) => dispacth({type: actionTypes.removeIngredients, ingredient: ingredient}),
        cancelBurgerHandler: () => dispacth({type: actionTypes.cancelBurger})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurguerBuilder, axios));