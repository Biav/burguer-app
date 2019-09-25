import React, {Component} from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import Order from '../../Order/Order';
import './BurgerControls.css'

class BurgerControls extends Component {

    render() {

        const burgerIngredients = Object.keys(this.props.ingredients).map((ingredient, index) => {
            
            let buttonDisabled = (this.props.ingredients[ingredient].total > 0) ? false : true;

            return (
                <BurgerControl key={ ingredient } name={ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                               added = {() => this.props.addIngredient(ingredient) }
                               removed = { () => this.props.removeIngredient(ingredient) } buttonDisabled = { buttonDisabled }/>
            );
        });

        return (
            <div className="controls" >
                {burgerIngredients}
                <Order ingredients = { this.props.ingredients } 
                       currentPrice = { this.props.currentPrice }
                       cancelBurger = { () => this.props.cancelBurger() }
                       loading = { this.props.loading }
                       purchaseOrder = { this.props.purchaseOrder }/>
            </div>
        )
    }
}

export default BurgerControls;