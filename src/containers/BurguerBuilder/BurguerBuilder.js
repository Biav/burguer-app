import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliar';
import Burguer from '../../components/Burger/Burger';

class BurguerBuilder extends Component {

    state = {
        ingredients: {
            salad: {
                total: 1,
                price: 0.4
            },
            cheese: {
                total: 1,
                price: 1
            },
            meat: {
                total: 1,
                price: 2
            },
            bacon: {
                total: 1,
                price: 2
            }
        },
        price: 4
    };

    render(){
        return (
            <Aux>
                <Burguer ingredients = {this.state.ingredients}/>
                <div>Burguer Controls</div>
            </Aux>
        );
    }
}

export default BurguerBuilder;