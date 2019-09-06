import React, {Component} from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

class Burguer extends Component {
    
    render () {
        let burger = [],
            burgerIngredients = 0;

        Object.keys(this.props.ingredients).map((ingredient, index) => {
            let total = this.props.ingredients[ingredient];
            if(total.total > 0) {
                for(let i = 0; i < total.total; i++) {
                    ingredient = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
                    burger.push(<BurgerIngredient key={ingredient + i} type={ingredient}></BurgerIngredient>);
                }
            } else {
                burgerIngredients += 1;
            }
            
            return null;
        });

        if(burgerIngredients === Object.keys(this.props.ingredients).length) {
            burger = <b>Please add ingredients</b>;
        }
        
        return (
            <div className="burger">
                <BurgerIngredient type="BreadTop"></BurgerIngredient>
                {burger}
                <BurgerIngredient type="BreadBottom"></BurgerIngredient>
            </div>
        );
    }
};

export default Burguer;