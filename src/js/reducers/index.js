import { combineReducers } from 'redux'

import userReducer from './users'
import tweetsReducer from './tweets'

const reducer = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})
export default reducer