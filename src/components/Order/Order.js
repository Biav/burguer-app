import React, {Component} from 'react';
import Modal from '../Layout/Modal/Modal';
import { Button } from 'semantic-ui-react'

class Order extends Component {
    render () {
        return (
            <div>
                <Button basic color='red' onClick = { this.props.cancelBurger }>Cancel</Button>
                <Modal/>
            </div>
        );
    }
};  

export default Order;