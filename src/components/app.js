import React, { Component } from 'react';

import InputBar from '../containers/inputBar'
import TasksTable from '../containers/tasksTable'


export default class App extends Component {
  render() {
    return (
      <div>
          <InputBar />
          <TasksTable />
      </div>
    )
  }
}