export const ADD_TO_LIST = "ADD_TO_LIST"
export const CHANGE_TYPE = "CHANGE_TYPE"

export function addToList(task){
  return {
    type: ADD_TO_LIST,
    payload:task
  }
}

export function changeType(newType,task){
  return {
    type: CHANGE_TYPE,
    payload: task,
    type: newType
  }
}