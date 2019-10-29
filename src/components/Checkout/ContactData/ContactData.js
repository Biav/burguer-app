import React, {Component} from 'react';
import Aux from './../../../hoc/Auxiliar';
import './ContactData.css';

class ContactData extends Component {

    render() {
        return (
            <Aux>
                <div className="contact-data">
                    <form className="ui form">
                        <div className="field">
                            <label> Name</label>
                            <input placeholder="Name" />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input placeholder="Email" />
                        </div>
                        <div className="field">
                            <label>Street</label>
                            <input placeholder="Street" />
                        </div>
                        <div className="field">
                            <label>Zip Code</label>
                            <input placeholder="Zip Code" />
                        </div>
                        <button type="button" className="ui button" onClick = {this.props.orderHandler}>Submit</button>
                    </form>
                </div>
            </Aux>
        );
    }

}

export default ContactData;