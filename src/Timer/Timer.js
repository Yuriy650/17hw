import React, {Component} from 'react';
import CurrentTime from "../CurrentTime/CurrentTime";
import Button from "../Button/Button";
import ButtonPeriod from "../ButtonPeriod/ButtonPeriod";
import './Timer.css'

const START = 10;
const PERIOD = 20;
const SECOND = 1000;
const SOMETIME = 2000;
let width;

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: START,
            timePeriod: PERIOD,
            button: 'Start',
            buttonPeriod: 'Start',
            autoStart: false,
            line: 100,
        }
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    componentDidMount() {
        if (this.state.autoStart === true) {
            setInterval(
                () => this.startTimer(),
                1000
            );
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        clearInterval(this.timerPeriodID);
    }


    startTimer = (interval, step, part) => {

        this.props.onTimeStart();
        this.timerID = setInterval(() => {
            if (this.state.time === 0) {
                this.setState({time: START, line: 100});
                this.props.onTimeEnd();
            } else {
                this.setState({time: this.state.time - step, button: 'Stop', line: this.state.line - part});
            }

        }, interval);
    }

    stopTimer = (e) => {
        //console.log(e.target.value);
        this.setState({time: e.target.value, button: 'Start', autoStart: false, line: 100});
        this.componentWillUnmount();
        this.props.onTimePause();
    }

    checkTimer = (e) => {
        this.state.button === 'Start' ? this.startTimer(SECOND, 1, 10 ) : this.stopTimer(e)
    }
    startTimerPeriod = (interval, step) => {
        this.timerPeriodID = setInterval(() => {
            if (this.state.timePeriod === 0) {
                this.setState({timePeriod: PERIOD});
            } else {
                this.setState({timePeriod: this.state.timePeriod - step, buttonPeriod: 'Stop'})
            }
        }, interval);
    }
    stopTimerPeriod = (e) => {
        this.setState({timePeriod: e.target.value, buttonPeriod: 'Start', autoStart: false, });
        this.componentWillUnmount();
    }
    checkTimerPeriod = (e) => {
        this.state.buttonPeriod === 'Start' ? this.startTimerPeriod(SOMETIME, 2) : this.stopTimerPeriod(e)
    }

    render() {
        width={width: this.state.line+'%'};
        return (
            <div>
                <CurrentTime time={this.state.time}/>
                <Button value={this.state.time} onclick={this.checkTimer} button={this.state.button}/>
                <p className="line" style={width}/>
                <div className="some-text">Залишилось: {this.state.time === 0 ? this.props.onTimeEnd(): this.props.onTick(this.state.time)}</div>
                <CurrentTime time={this.state.timePeriod}/>
                <ButtonPeriod value={this.state.timePeriod} onclick={this.checkTimerPeriod}
                              buttonPeriod={this.state.buttonPeriod}/>
            </div>
        )
    }
}

export default Timer;