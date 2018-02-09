import { ADD_TO_LIST } from '../actions/index'

export default function(state = [],action) {
  switch (action.type){
    case ADD_TO_LIST:{
      return [action.payload, ...state];
    }
  }
  return state
}