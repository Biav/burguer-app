import React, {Component} from 'react';
import Aux from './../../../hoc/Auxiliar';
import './ContactData.css';

class ContactData extends Component {

    render() {
        return (
            <Aux>
                <div class="contact-data">
                    <form class="ui form">
                        <div class="field">
                            <label> Name</label>
                            <input placeholder="Name" />
                        </div>
                        <div class="field">
                            <label>Email</label>
                            <input placeholder="Email" />
                        </div>
                        <div class="field">
                            <label>Street</label>
                            <input placeholder="Street" />
                        </div>
                        <div class="field">
                            <label>Zip Code</label>
                            <input placeholder="Zip Code" />
                        </div>
                        <button type="submit" class="ui button">Submit</button>
                    </form>
                </div>
            </Aux>
        );
    }

}

export default ContactData;