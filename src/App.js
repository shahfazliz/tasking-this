import React from 'react';
import AssignDeep from './utils/AssignDeep';
import {onKeyEnter} from './utils/KeyBoardKeys';
import PomodoroTimer from './uil/PomodoroTimer';

export default class App extends React.Component {
  state = {
    lastTaskNumber: 2,
    tasks: {
      1: {
        editable: false,
        id: 1,
        value: 'PSM chapter 1',
      },
      2: {
        editable: false,
        id: 2,
        value: 'add a take break timer',
      }
    },
  };

  toggleEditableTask = (taskObject, toggle) => {
    const newTaskObjects = AssignDeep(this.state.tasks, {
      [taskObject.id]: {
        editable: toggle,
      }
    });

    const cleanUpTasksObjects = Object
      .values(newTaskObjects)
      .reduce((accumulator, taskObject) => {
        if (taskObject.value.length > 0) {
          accumulator[taskObject.id] = taskObject;
        }
        return accumulator;
      }, {});

    this.setState(() => ({
      tasks: cleanUpTasksObjects,
    }));
  };

  handleEditTask = (taskObject, value) => {
    this.setState((prevState) => ({
      tasks: AssignDeep(prevState.tasks, {
        [taskObject.id] : {
          value: value,
        },
      }),
    }));
  };

  handleNewTask = (event, taskObject) => {
    onKeyEnter(event, () => {
      const lastTaskNumber = this.state.lastTaskNumber + 1;
      this.setState({
        lastTaskNumber,
        tasks: AssignDeep(this.state.tasks, {
          [taskObject.id]: {
            editable: false,
          },
          [lastTaskNumber]: {
            editable: true,
            id: lastTaskNumber,
            value: '',
          },
        })
      });
    });
  };

  renderEditableField = taskObject => <li key={ taskObject.id }><input
    onBlur={ () => this.toggleEditableTask(taskObject, false) }
    onChange={ event => this.handleEditTask(taskObject, event.target.value) }
    autoFocus={ true }
    onKeyDown={ event => this.handleNewTask(event, taskObject) }
    type='text'
    value={ taskObject.value }
  /></li>;

  renderListElement = taskObject => <li
    key={ taskObject.id }
    onClick={ () => this.toggleEditableTask(taskObject, true) }
  >{ taskObject.value }</li>;

  renderTaskList = taskObjects => {
    return taskObjects
      .map(taskObject => {
        if (taskObject.editable) {
          return this.renderEditableField(taskObject);
        }
        return this.renderListElement(taskObject);
      });
  };

  render() {
    return <div>
      <h3>Do it now</h3>
      <ul>
        { this.renderTaskList(Object.values(this.state.tasks)) }
      </ul>
      <PomodoroTimer />
    </div>;
  }
}
