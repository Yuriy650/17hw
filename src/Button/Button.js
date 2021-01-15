import React from 'react';
import './Button.css'
function Button(props) {
    return (
        <div>
            <button className="start" type="button" value={props.value}
                    onClick={props.onclick}>{props.button}
            </button>
        </div>
        )

}

export default Button;