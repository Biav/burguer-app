import React, { Component } from 'react';

class ListOrder extends Component {

    render() {
        
        let ingredients = null;

        if(this.props.ingredients) {
            ingredients = Object.keys(this.props.ingredients).map((ingredient) => {
                return(
                    <div>
                        {ingredient} ({ this.props.ingredients[ingredient].total })
                    </div>
                );
            });
        }

        return (
            <div key = { this.props.id }> 
                <div> {this.props.name }</div>
                { ingredients }
                <div>Total: {this.props.total }</div>
            </div>
        );
    }
}

export default ListOrder;