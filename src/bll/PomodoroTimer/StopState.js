import StartState from './StartState';

export default class StopState {
  constructor({
    seconds,
    callbackFunction,
    message = 'Congratulations',
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
      message: this.message,
    });
  }

  stop() {
    return this;
  }

  pause() {
    return this;
  }
}