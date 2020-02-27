import StartState from './StartState';
import StopState from './StopState';

export default class PauseState {
  constructor({
    seconds,
    callbackFunction,
    message = 'Paused',
  }) {
    this.seconds = seconds;
    this.callbackFunction = callbackFunction;
    this.message = message;
  }

  start(seconds = this.seconds, message = this.message) {
    this.seconds = seconds;
    this.message = message;

    return new StartState({
      seconds: this.seconds,
      callbackFunction: this.callbackFunction,
    });
  }

  stop() {
    return new StopState({
      seconds: this.seconds,
      callbackFunction: this.callbackFunction,
    });
  }

  pause() {
    return this;
  }
}