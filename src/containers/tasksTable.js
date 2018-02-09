import React, { Component } from 'react';
import { connect } from 'react-redux';

class TasksTable extends Component {
  renderTasks(task)
  {
    return(
      <tr>
        <td>{task.type}</td>
        <td>{task.term}</td>
        <td></td>
      </tr>
    )
  }
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
          {this.props.tasks.map(this.renderTasks)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps( {tasks}) {
  return { tasks } ;
}

export default connect(mapStateToProps)(TasksTable)
