import React from 'react';
import StartState from '../bll/PomodoroTimer/StartState';

export default class PomodoroTimer extends React.Component {
  state = {
    display: '00:00',
    timer: new StartState({
      callbackFunction: (display) => {
        this.setState({
          display,
        });
      },
    }),
  };

  handleStart = () => {
    this.setState({
      timer: new StartState({
        callbackFunction: (display) => {
          this.setState({
            display,
          });
        },
      }),
    });
  }

  handleBreak = () => {
    this.setState({
      timer: new StartState({
        seconds: 300,
        message: 'Take a break',
        callbackFunction: (display) => {
          this.setState({
            display,
          });
        },
      }),
    });
  }

  handlePause = () => {
    this.setState({
      timer: this.state.timer.pause(),
    });
  };

  handleContinue = () => {
    this.setState({
      timer: this.state.timer.start(),
    })
  };

  handleStop = () => {
    this.setState({
      timer: this.state.timer.stop(),
    });
  }

  renderStartButton = () => this.state.timer.constructor.name === 'StopState'
    && <button onClick={ this.handleStart }>Start</button>;

  renderBreakButton = () => this.state.timer.constructor.name === 'StopState'
    && <button onClick={ this.handleBreak }>Take a break</button>;

  renderPauseButton = () => this.state.timer.constructor.name === 'StartState'
    && <button onClick={ this.handlePause }>Pause</button>;

  renderContinueButton = () => this.state.timer.constructor.name === 'PauseState'
    && <button onClick={ this.handleContinue }>Continue</button>;

  renderStopButton = () => (this.state.timer.constructor.name === 'StartState'
    || this.state.timer.constructor.name === 'PauseState')
    && <button onClick={ this.handleStop }>Stop</button>;

  render() {
    const blackCurtainStyle = {
      backgroundColor: 'black',
      height: '100%',
      left: 0,
      opacity: 0.6,
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: -100,
    };

    const timerStyle = {
      color: 'white',
      fontSize: 50,
      textAlign: 'center',
      position: 'relative',
    };

    return <React.Fragment>
      <div style={ blackCurtainStyle }></div>
      <div style={ timerStyle }>
        <div>{ this.state.timer.message }</div>
        <div>{ this.state.display }</div>
        <div>
          { this.renderStartButton() }
          { this.renderPauseButton() }
          { this.renderContinueButton() }
          { this.renderStopButton() }
          { this.renderBreakButton() }
        </div>
      </div>
    </React.Fragment>;
  }
}