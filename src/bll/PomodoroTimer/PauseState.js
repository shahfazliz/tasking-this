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
    this.backupMessage = message;
    this.message = 'Paused';
  }

  start(seconds = this.seconds, message = this.backupMessage) {
    this.seconds = seconds;
    this.message = message;

    return new StartState({
      callbackFunction: this.callbackFunction,
      message: this.message,
      seconds: this.seconds,
    });
  }

  stop() {
    return new StopState({
      callbackFunction: this.callbackFunction,
    });
  }

  pause() {
    return this;
  }
}