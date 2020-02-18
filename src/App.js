import React from 'react';
import AssignDeep from './utils/AssignDeep';
import {onKeyEnter} from './utils/KeyBoardKeys';

export default class App extends React.Component {
  state = {
    lastTaskNumber: 1,
    tasks: {
      1: {
        editable: false,
        id: 1,
        value: 'test',
      }
    },
  };

  toggleEditableTask = (taskObject, toggle) => {
    this.setState({
      tasks: AssignDeep(this.state.tasks, {
        [taskObject.id]: {
          editable: toggle,
        }
      }),
    });
  }

  handleEditTask = (taskObject, value) => {
    this.setState({
      tasks: AssignDeep(this.state.tasks, {
        [taskObject.id] : {
          value: value,
        },
      }),
    });
  }

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
  }

  renderEditableField = taskObject => <li key={ taskObject.id }><input 
    onBlur={ () => this.toggleEditableTask(taskObject, false) }
    onChange={ event => this.handleEditTask(taskObject, event.target.value) }
    onKeyDown={ (event, taskObject) => this.handleNewTask(event, taskObject) }
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
  }
  
  render() {
    return <div>
      <h3>Do it now</h3>
      <ul>
        { this.renderTaskList(Object.values(this.state.tasks)) }
      </ul>
    </div>;
  }
}
