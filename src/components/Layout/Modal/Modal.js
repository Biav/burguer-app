import React, { Component } from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import './Modal.css';

class ModalOrder extends Component {

  render () {
    const burgerIngredients = Object.keys(this.props.order).map( (ingredient) => { 
      return (<div key = {ingredient}> 
                {ingredient} : 
                { this.props.order[ingredient].total }
              </div>);
    });

    return (
      <Modal trigger={<Button basic color='blue'>Order Now</Button>}>
        <Modal.Header>Your Order</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>You burger: $ { this.props.currentPrice } </Header>
            <div>
              { burgerIngredients }
            </div>
            <div>Continue to checkout</div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalOrder;