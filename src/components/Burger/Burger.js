import React, {Component} from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

class Burguer extends Component {
    
    render () {
        let burger = [];

        console.log(this.props.ingredients);

        Object.keys(this.props.ingredients).map((ingredient, index) => {
            let total = this.props.ingredients[ingredient];
            console.log(this.props.ingredients[ingredient]);
            for(let i = 0; i < total.total; i++) {
                console.log(ingredient, index, i);
                ingredient = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
                burger.push(<BurgerIngredient key={ingredient + i} type={ingredient}></BurgerIngredient>);
            }
            
            return null;
        });
        
        return (
            <div>
                <BurgerIngredient type="BreadTop"></BurgerIngredient>
                {burger}
                <BurgerIngredient type="BreadBottom"></BurgerIngredient>
            </div>
        );
    }
};

export default Burguer;