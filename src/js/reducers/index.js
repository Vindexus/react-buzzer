import { combineReducers } from 'redux'

import buzzesReducer from './buzzes'
import namesReducer from './names'

export default combineReducers({
  buzzes: buzzesReducer,
  names: namesReducer
})
