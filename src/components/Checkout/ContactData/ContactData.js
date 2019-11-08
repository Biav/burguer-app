import React, {Component} from 'react';
import Aux from './../../../hoc/Auxiliar';
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import axios from './../../../axios-order';
import './ContactData.css';

class ContactData extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: '',
            email: '', 
            street: '', 
            zipCode: '', 
        }

    }

    orderHandler = () => {

        this.setState({
            loading: true
        });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            user: {
                name: this.state.name,
                email: this.state.email,
                address: {
                    street: this.state.street,
                    zipCode: this.state.zipCode
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


    componentWillMount () {
        this.validator = new SimpleReactValidator({autoForceUpdate: this});
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
                            <label>Email</label>
                            <input placeholder="Email" 
                                   value = { this.state.email }
                                   onChange = { (e) => this.handleChange('email', e) } 
                                   onBlur={() => this.validator.showMessageFor('email')}/>

                            {this.validator.message('email', this.state.email, 'required|email')}

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
        ingredients: state.ingredients,
        price: state.price
    }
}

export default connect(mapStateToProps)(ContactData);