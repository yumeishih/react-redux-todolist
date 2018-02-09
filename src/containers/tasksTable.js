import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from './task'

class TasksTable extends Component {
  render(){
    return(
      <table className="tasks-table">
        <thead>
        <tr>
          <th>Type</th>
          <th>Task</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task) => <Task task={task}/>)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps( {tasks}) {
  return { tasks } ;
}

export default connect(mapStateToProps)(TasksTable)
