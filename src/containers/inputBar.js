import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToList } from '../actions/index';

import SelectType from '../components/selectType'

class InputBar extends Component {
  constructor(props){
    super(props);
    this.state={
      type: '',
      term:'',
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)

  }
  onInputChange(event){
    this.setState({term:event.target.value})
  }
  onSelectChange(event){
    this.setState({type:event.target.value})
  }
  onFormSubmit(event){
    event.preventDefault();
    this.props.addToList({
      type: this.state.type,
      term: this.state.term
    });
    this.setState({term:''})
    this.setState({type:''})
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-form">
        <SelectType onSelectChange={this.onSelectChange} />
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