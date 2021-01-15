import React from 'react';
import './CurrentTime.css';

function CurrentTime (props) {
    return (
        <div>
            {console.log({props})}
            <p className="show-timer">00:{props.time}</p>
        </div>
    )
}

export default CurrentTime;