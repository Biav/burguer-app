import React from 'react';
import './BurgerControl.css';

const burgerControl = (props) => (
    <div className="BuildControl">
        <div className="Label"> {props.name} </div>
        <button className="Less" onClick= {props.removed}> Less </button>
        <button className="More" onClick = {props.added}> More </button>
    </div>
);

export default burgerControl;