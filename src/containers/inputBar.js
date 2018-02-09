import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToList } from '../actions/index'

class InputBar extends Component {
  constructor(props){
    super(props);
    this.state={ term:''}
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange(event){
    this.setState({term:event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.addToList(this.state.term);
    this.setState({term:''})
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-form">
        <input
          placeholder= "Add Task"
          value = {this.state.term}
          onChange = {this.onInputChange}
        />
        <button type="submit">Add</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addToList }, dispatch)
}

export default connect(null, mapDispatchToProps)(InputBar)