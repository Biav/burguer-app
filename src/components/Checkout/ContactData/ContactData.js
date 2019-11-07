import React, {Component} from 'react';
import Aux from './../../../hoc/Auxiliar';
import SimpleReactValidator from 'simple-react-validator';
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

    componentWillMount () {
        this.validator = new SimpleReactValidator({autoForceUpdate: this});

    }

    submitForm = () => {
        if (this.validator.allValid()) {
          alert('You submitted the form and stuff!');
        } else {
          this.validator.showMessages();
          // rerender to show messages for the first time
          // you can use the autoForceUpdate option to do this automatically`
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
                                   defaultValue = { this.state.name } 
                                   onBlur={() => this.validator.showMessageFor('name')}/>
                            
                            {this.validator.message('name', this.state.name, 'required|alpha')}

                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input placeholder="Email" 
                                   defaultValue = { this.state.email }
                                   onBlur={() => this.validator.showMessageFor('email')}/>

                            {this.validator.message('email', this.state.email, 'required|email')}

                        </div>
                        <div className="field">
                            <label>Street</label>
                            <input placeholder="Street" 
                                   defaultValue = { this.state.street } 
                                   onBlur={() => this.validator.showMessageFor('street')}/>

                                {this.validator.message('street', this.state.email, 'required|alpha')}

                        </div>
                        <div className="field">
                            <label>Zip Code</label>
                            <input placeholder="Zip Code" 
                                   defaultValue = { this.state.zipCode }
                                   onBlur={() => this.validator.showMessageFor('zipCode')} />
                            
                            {this.validator.message('zipCode', this.state.email, 'required|alpha')}

                        </div>
                        <button type="button" className="ui button" onClick = { this.submitForm }>Submit</button>
                    </form>
                </div>
            </Aux>
        );
    }

}

export default ContactData;