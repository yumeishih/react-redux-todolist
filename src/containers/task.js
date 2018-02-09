import React ,{ Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SelectType from '../components/selectType'
import { changeType } from '../actions/index';


class Task extends Component{
  constructor(props){
    super(props);
    this.state ={
      type: props.task.type
    }
    this.onSelectChange = this.onSelectChange.bind(this)
  }
  onSelectChange(event){
    this.props.changeType(event.target.value, this.props.task)
    this.setState({type:event.target.value})
  }
  render(){
    const {task} = this.props
    return (
      <tr>
        <td><SelectType onSelectChange={this.onSelectChange} value={this.state.type} /></td>
        <td>{task.term}</td>
        <td></td>
      </tr>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ changeType }, dispatch)
}

export default connect(null, mapDispatchToProps)(Task)