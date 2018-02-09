export const ADD_TO_LIST = "ADD_TO_LIST"

export function addToList(task){
  return {
    type: ADD_TO_LIST,
    payload:task
  }
}