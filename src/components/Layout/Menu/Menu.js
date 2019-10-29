import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../Logo/Logo';

class Menu extends Component {
    render() {
        return(
            <div>
                <div className="ui menu">
                    <a className="item" href="#burger"><Logo/></a>
                    <NavLink className="item" exact to={"/"}> Burger </NavLink>
                    <NavLink className="item" exact to={"/checkout"} > Checkout </NavLink>
                    <NavLink className="item" exact to={"/orders"} > Orders </NavLink>
                 </div>
            </div>
        );
    }
};

export default Menu;