import React, {Component} from 'react';
import Burger from '../Burger/Burger';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {
    render () {

        return (
            <div>
                <Burger ingredients = {this.props.ingredients}/>
                <ContactData/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);