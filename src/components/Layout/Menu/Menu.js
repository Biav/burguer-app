import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as loginActions from '../../../store/actions';
import './Menu.css'
import Logo from '../Logo/Logo';

class Menu extends Component {

    render() {

        let menuLogin = [];
        
        if(this.props.token) {
            menuLogin = 
                <div>
                    <NavLink className="item" exact to={"/orders"} > Orders </NavLink>
                    <NavLink className="item" exact to={"/logout"}> Logout </NavLink>
                </div>;

        } else {
            menuLogin = <NavLink className="item" exact to={"/"}> Login </NavLink>;
        }
        

        return(
            <div>
                <div className="ui menu">
                    <a className="item" href="#burger"><Logo/></a>
                    <NavLink className="item" exact to={"/burger"}> Burger </NavLink>
                    { menuLogin }
                 </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        token: state.loginUser.token
    }
}

const mapDispatchToProps = dispacth => {
    return {
        logoutUser: () => dispacth(loginActions.doLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);