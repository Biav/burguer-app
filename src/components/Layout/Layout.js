import React from 'react';

import Aux from '../../hoc/Auxiliar';

const layout = (props) => (

    <Aux>
        <div>Menu</div>
        <main>
            {props.children}
        </main>
    </Aux>
);



export default layout;