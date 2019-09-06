import React from 'react';

import Aux from '../../hoc/Auxiliar';
import Menu from './Menu/Menu';

const layout = (props) => (

    <Aux>
        <Menu/>
        <main>
            {props.children}
        </main>
    </Aux>
);



export default layout;