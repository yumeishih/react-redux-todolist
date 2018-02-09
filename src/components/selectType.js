import React from 'react';

export default (props) => {
  return(
    <select onChange = {props.onSelectChange} value={props.value}>
      <option value="">Type</option>
      <option value="Life">Life</option>
      <option value="Learn">Learn</option>
      <option value="Work">Work</option>
      <option value="Wanted">Wanted</option>
    </select>
  )
}