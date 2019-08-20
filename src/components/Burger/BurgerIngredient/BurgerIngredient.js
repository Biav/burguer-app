import React, {Component} from 'react';
import './BurgerIngredient.css';
import PropTypes from 'prop-types';


class BurgerIngredient extends Component {

    render() {
        let ingredient = null;
        
        ingredient = <div className={this.props.type}></div>;

        return ingredient;
    }
    
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;