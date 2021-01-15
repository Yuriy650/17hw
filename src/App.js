import React from 'react';
import './App.css';
import Timer from './Timer/Timer';

function App() {
    return (
        <div className="App">
            <Timer
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
