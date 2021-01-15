import React from 'react';
import './App.css';
import Timer from './Timer/Timer';

function App() {
    const SECOND = 1000;
    const SOMETIME = 2000;

    return (
        <div className="App">
            <Timer
                step={SECOND}
                anotherStep={SOMETIME}
                onTick={(time) => {
                    console.log("Залишилось часу: " + time)
                    return time
                }}
                onTimeStart={() => console.log("Таймер запущено!")}
                onTimeEnd={() => {
                    console.log("Час вийшов!")
                    return "Час вийшов!"
                }}
                onTimePause={() => console.log("Таймер на паузі!")}/>
        </div>
    );
}

export default App;
