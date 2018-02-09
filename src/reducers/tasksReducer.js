import { ADD_TO_LIST,CHANGE_TYPE } from '../actions/index'

export default function(state = [],action) {
  switch (action.type){
    case ADD_TO_LIST:{
      return [...state,action.payload];
    }
    case CHANGE_TYPE:{
      const index = state.indexOf(action.payload);
      action.payload.type = action.type
      return [...state.splice(0,index),action.payload,...state.splice(index,state.length) ]
    }
  }
  return state
}