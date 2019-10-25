import React, {Component} from 'react';
import Burger from '../Burger/Burger';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    render () {

        let ingredients = {
            cheesse: {
                total: 1,
                price: 0.4
            },
            meat: {
                total: 1,
                price: 0.1
            },
            salad: {
                total: 1,
                price: 0.5
            }
        }

        return (
            <div>
                <Burger ingredients = {ingredients}/>
                <ContactData/>
            </div>
        );
    }
}

export default Checkout;