import React, {Component} from 'react';
import Logo from '../Logo/Logo';

class Menu extends Component {
    render() {
        return(
            <div>
                <div class="ui menu">
                    <a class="item"  href="#burger">
                        <Logo/>
                    </a>
                    <a class="active item" href="#burger">
                        Burger Builder
                    </a>
                    <a class="item"  href="#burger">
                        Checkout
                        </a>
                </div>
            </div>
        );
    }
};

export default Menu;