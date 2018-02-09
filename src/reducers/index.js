import { combineReducers } from 'redux';
import InputBarReducer from './inputBarReducer';

const rootReducer = combineReducers({
  tasks: InputBarReducer
})

export default rootReducer;