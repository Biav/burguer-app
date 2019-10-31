import React, { Component } from 'react';
import './ListOrder.css';

class ListOrder extends Component {

    render() {
        
        let ingredients = null;

        if(this.props.ingredients) {
            ingredients = Object.keys(this.props.ingredients).map((ingredient) => {
                return(
                    <div key = { Math.random() }>
                        {ingredient} ({ this.props.ingredients[ingredient].total })
                    </div>
                );
            });
        }

        return (
            <div className="ui cards"> 
                <div className="ui card">
                    <div className="content">
                        <div className="header">{ this.props.name }</div>
                        <div className="meta">Total: { this.props.total }</div>
                        <div className="description">
                            { ingredients }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListOrder;