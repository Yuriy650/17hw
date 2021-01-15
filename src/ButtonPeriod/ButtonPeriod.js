import React from 'react';
import './ButtonPeriod.css';

function ButtonPeriod(props) {
    return (
        <div>
            <button className="start" type="button" value={props.value} onClick={props.onclick}>{props.buttonPeriod}</button>
        </div>
    )
}
export default ButtonPeriod;