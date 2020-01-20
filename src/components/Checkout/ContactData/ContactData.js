import React, {Component} from 'react';
import Aux from './../../../hoc/Auxiliar';
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from './../../../axios-order';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './ContactData.css';

class ContactData extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: '',
            street: '', 
            zipCode: '', 
        }

        this.validator = new SimpleReactValidator({autoForceUpdate: this});

    }

    orderHandler = () => {

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            userId: this.props.userId,
            user: {
                name: this.state.name,
                email: this.props.user,
                address: {
                    street: this.state.street,
                    zipCode: this.state.zipCode
                }
            }
        }

        let token = (this.props.token)? this.props.token : null;
        let notification = 2000;

        axios.post("/order.json?auth=" + token, order)
             .then(response => {
                NotificationManager.success('Success message', 'Order Success');
                this.redirectOrders();
             })
             .catch(error => {
                NotificationManager.error('Success message', 'Order Error');
                this.redirectOrders();
             });
    }

    redirectOrders () {
        setTimeout( () => {
            this.props.history.push('/orders');
        }, 3000)
    }

    handleChange (name, event) {
        this.setState({ [name]: event.target.value })
    }

    submitForm = () => {
        if (this.validator.allValid()) {
          this.orderHandler();
        } else {
          this.validator.showMessages();
          this.forceUpdate();
        }
      }

    render() {
        return (
            <Aux>
                <NotificationContainer/>
                <div className="contact-data">
                    <form className="ui form">
                        <div className="field">
                            <label> Name</label>
                            <input placeholder="Name" 
                                   value = { this.state.name } 
                                   onChange = { (e) => this.handleChange('name', e) }
                                   onBlur={() => this.validator.showMessageFor('name')}/>
                            
                            {this.validator.message('name', this.state.name, 'required')}

                        </div>
                        <div className="field">
                            <label>Street</label>
                            <input placeholder="Street" 
                                   value = { this.state.street } 
                                   onChange = { (e) => this.handleChange('street', e) } 
                                   onBlur={() => this.validator.showMessageFor('street')}/>

                                {this.validator.message('street', this.state.street, 'required')}

                        </div>
                        <div className="field">
                            <label>Zip Code</label>
                            <input placeholder="Zip Code" 
                                   value = { this.state.zipCode }
                                   onChange = { (e) => this.handleChange('zipCode', e) } 
                                   onBlur={() => this.validator.showMessageFor('zipCode')} />
                            
                            {this.validator.message('zipCode', this.state.zipCode, 'required|numeric')}

                        </div>
                        <button type="button" className="ui button" onClick = { this.submitForm }>Submit</button>
                    </form>
                </div>
            </Aux>
        );
    }

}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price,
        user: state.loginUser.user,
        userId: state.loginUser.userId,
        token: state.loginUser.token
    }
}

export default connect(mapStateToProps)(withRouter(ContactData));