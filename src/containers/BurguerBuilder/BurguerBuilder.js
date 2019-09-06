import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliar';
import Burguer from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';

class BurguerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: {
                    total: 0,
                    price: 0.4
                },
                cheese: {
                    total: 0,
                    price: 1
                },
                meat: {
                    total: 0,
                    price: 2
                },
                bacon: {
                    total: 0,
                    price: 2
                }
            },
            price: 4
        };

        this.initialState = {
            ...this.state
        }
    }

    cancelBurger = () => {

        let ingredients = {
            ...this.initialState.ingredients
        };

        Object.keys(ingredients).map((ingredient)=>{
            return ingredients[ingredient].total = 0;
        });

        this.setState(this.initialState);
    }

    addIngredientHandler = (ingredient) => {
        let burgerIngredients = {
            ...this.state.ingredients
        };
        
        burgerIngredients[ingredient].total += 1;

        let priceTotal = parseFloat(this.state.price)
                         + burgerIngredients[ingredient].total 
                         * parseFloat(burgerIngredients[ingredient].price);

        this.setState({
            ingredients: burgerIngredients,
            price: (priceTotal).toFixed(2)
        });
    }

    removeIngredient = (ingredient) => {

        let burgerIngredients = {
            ...this.state.ingredients
        }

        burgerIngredients[ingredient].total = (burgerIngredients[ingredient].total > 0) ? 
                                               burgerIngredients[ingredient].total - 1 : 0;

        let priceTotal = parseFloat(this.state.price)
                        - parseFloat(burgerIngredients[ingredient].price);

        this.setState({
            ingredients: burgerIngredients,
            price: (priceTotal).toFixed(2)
        });                                   
    }


    render(){
        return (
            <Aux>
                <Burguer ingredients = {this.state.ingredients}/>
                <p> Current price: <b> ${ this.state.price } </b> </p>
                <BurgerControls ingredients = {this.state.ingredients}
                    addIngredient = { this.addIngredientHandler } 
                    removeIngredient = { this.removeIngredient } 
                    currentPrice = { this.state.price }
                    cancelBurger = { this.cancelBurger }/>
            </Aux>
        );
    }
}

export default BurguerBuilder;