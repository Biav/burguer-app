import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliar';
import Burguer from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import { Message } from 'semantic-ui-react'
import './BurguerBuilder.css';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
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

    purchaseOrder = () => {

        // this.setState({
        //     loading: true
        // });

        // const order = {
        //     ingredients: this.props.ingredients,
        //     price: this.props.currentPrice,
        //     user: {
        //         name: "Teste 1",
        //         email: "teste1@gmail.com",
        //         address: {
        //             street: "Street 1",
        //             zipCode: "123456",
        //             state: "CA",
        //             country: "US"
        //         }
        //     }
        // }

        // axios.post("/order.json", order)
        //      .then(response => {
        //         this.setState({
        //             loading: false
        //         })
        //         console.log(response)
        //      })
        //      .catch(error => {
        //         this.setState({
        //             loading: false
        //         })
        //         console.log(error)
        //      });

        this.props.history.push("/checkout");
    }

    render(){

        let showIngredients;
        
        if (!this.state.error) {
            showIngredients = (
            <Aux>
                <Burguer ingredients = { this.state.ingredients } />
                <p> Current price: <b> ${ this.state.price } </b> </p>
                <BurgerControls ingredients = {this.state.ingredients}
                    addIngredient = { this.addIngredientHandler } 
                    removeIngredient = { this.removeIngredient } 
                    currentPrice = { this.state.price }
                    cancelBurger = { this.cancelBurger }
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

export default withErrorHandler(BurguerBuilder, axios);