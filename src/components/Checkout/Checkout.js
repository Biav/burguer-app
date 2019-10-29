import React, {Component} from 'react';
import Burger from '../Burger/Burger';
import ContactData from './ContactData/ContactData';
import axios from './../../axios-order';

class Checkout extends Component {

    state = {
        ingredients: {
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
        },
        loading: false,
        price: 10
    }

    orderHandler = () => {
        console.log("test");


        this.setState({
            loading: true
        });

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            user: {
                name: "Teste 1",
                email: "teste1@gmail.com",
                address: {
                    street: "Street 1",
                    zipCode: "123456",
                    state: "CA",
                    country: "US"
                }
            }
        }

        axios.post("/order.json", order)
             .then(response => {
                this.setState({
                    loading: false
                })
                console.log(response)
             })
             .catch(error => {
                this.setState({
                    loading: false
                })
                console.log(error)
             });
    }

    render () {

        return (
            <div>
                <Burger ingredients = {this.state.ingredients}/>
                <ContactData orderHandler = {this.orderHandler}/>
            </div>
        );
    }
}

export default Checkout;