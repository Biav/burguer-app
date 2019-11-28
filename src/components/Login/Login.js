import React, {Component} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import * as loginActions from '../../store/actions/';
import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: '',
            isSignup: false 
        }

        this.validator = new SimpleReactValidator({autoForceUpdate: this});
    }

    onChangeHandler = (name, event) => {
        this.setState({[name]: event.target.value})
    }

    submitForm = () => {
        if (this.validator.allValid()) {
            this.setState({
                isSignup: false
            }, () => {
                this.props.signUp(this.state.user, this.state.password, this.state.isSignup);
            });
        } else {
          this.validation();
        }
    } 

    signUp = () => {
        if (this.validator.allValid()) {
            this.setState({
                isSignup: true
            }, () => {
                this.props.signUp(this.state.user, this.state.password, this.state.isSignup);
            });
        } else {
            this.validation();
        }
    }

    validation = () => {
        this.validator.showMessages();
        this.forceUpdate();
    } 


    render() {

        let errorMessage;

        if(this.props.error === 400) {
            errorMessage = <div className="ui negative message">
                                    <i className="close icon"></i>
                                    <p>Login or Password wrong</p>
                                </div>;
        }

        return (
            <div className="login">
                <form className="ui form">
                    <div className="field">
                        <label>User</label>
                        <input type="text" name="user" placeholder="User"
                               value={this.state.user} 
                               onBlur={() => this.validator.showMessageFor('user')}
                               onChange = { (e) => this.onChangeHandler("user", e) }/>
                        
                        {this.validator.message('user', this.state.user, 'required')}

                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password"
                               value={this.state.password}
                               onBlur={() => this.validator.showMessageFor('password')}
                               onChange = { (e) => this.onChangeHandler("password", e) } />
                        
                        {this.validator.message('password', this.state.password, 'required')}
                   
                    </div>
                    <button className="ui button" type="button" onClick = { this.signUp }>Register</button>
                    <button className="ui primary button" type="button" onClick = { this.submitForm } >Login</button>
                 </form>

                 { errorMessage }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.loginUser.user,
        password: state.loginUser.password,
        error: state.loginUser.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (user, password, isSignup) => dispatch(loginActions.loginStart(user, password, isSignup))
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
