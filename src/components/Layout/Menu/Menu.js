import React, {Component} from 'react';
import Logo from '../Logo/Logo';

class Menu extends Component {
    render() {
        return(
            <div>
                <div className="ui menu">
                    <a className="item" href="#burger">
                        <Logo/>
                    </a>
                    <a className="active item" href="#burger">
                        Burger Builder
                    </a>
                    <a className="item" href="#burger">
                        Checkout
                        </a>
                </div>
            </div>
        );
    }
};

export default Menu;