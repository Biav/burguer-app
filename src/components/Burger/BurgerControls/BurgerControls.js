import React, {Component} from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import Order from '../../Order/Order';
import './BurgerControls.css'

class BurgerControls extends Component {

    render() {
        let burgerIngredients = [];

        Object.keys(this.props.ingredients).map((ingredient, index) => {
            burgerIngredients.push(
                <BurgerControl key={ ingredient } name={ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                               added = {() => this.props.addIngredient(ingredient) }
                               removed = { () => this.props.removeIngredient(ingredient) } />
            );
            return false;
        });

        return (
            <div className="controls" >
                {burgerIngredients}
                <Order cancelBurger = { () => this.props.cancelBurger() }/>
            </div>
        )
    }
}

export default BurgerControls;