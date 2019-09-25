import React, {Component} from 'react';
import { Button, Modal, Header, Dimmer, Loader } from 'semantic-ui-react'

class Order extends Component {

    render () {

        const burgerIngredients = Object.keys(this.props.ingredients).map( (ingredient) => { 
        return (<div key = {ingredient}> 
                    {ingredient} : 
                    { this.props.ingredients[ingredient].total }
                </div>);
        });

        let loading = (!this.props.loading) ? null : <Dimmer active><Loader>Loading</Loader></Dimmer>;

        return (
            <div>
                <Button basic color='red' onClick = { this.props.cancelBurger }>Cancel</Button>
                <Modal trigger = {<Button onClick={this.handleOpen} basic color='blue'>Order Now</Button>} >
                    <Modal.Header>Your Order</Modal.Header>
                    <Modal.Content>
                    <Modal.Description>
                        { loading }
                        <div>
                            <Header> 
                                <div> You burger: $ { this.props.currentPrice } </div>
                            </Header>
                            <div>
                                { burgerIngredients }
                            </div>
                            <div>Continue to checkout</div>
                            <Button onClick= { this.props.purchaseOrder } basic color='blue'> Continue </Button>
                        </div>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
};  

export default Order;