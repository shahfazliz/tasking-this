import React from 'react';
import TimerState from '../bll/PomodoroTimer/StartState';

export default class PomodoroTimer extends React.Component {
  state = {
    display: '00:00',
    timer: new TimerState({
      callbackFunction: (display) => {
        this.setState({
          display,
        });
      },
    }),
  };

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

  renderPauseButton = () => this.state.timer.constructor.name === 'StartState'
    && <button onClick={ this.handlePause }>Pause</button>;

  renderContinueButton = () => this.state.timer.constructor.name === 'PauseState'
    && <button onClick={ this.handleContinue }>Continue</button>;

  render() {
    const blackCurtainStyle = {
      display: this.state.display === '00:00' && 'none',
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
      display: this.state.display === '00:00' && 'none',
      color: 'white',
      fontSize: 50,
      textAlign: 'center',
      position: 'relative',
    };

    return this.state.timer.constructor.name !== 'StopState'
      && <React.Fragment>
        <div style={ blackCurtainStyle }></div>
        <div style={ timerStyle }>
          <div>{ this.state.timer.message }</div>
          <div>{ this.state.display }</div>
          <div>
            { this.renderPauseButton() }
            { this.renderContinueButton() }
            <button onClick={ this.handleStop }>Stop</button>
          </div>
        </div>
      </React.Fragment>;
  }
}