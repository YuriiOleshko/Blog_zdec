import { combineReducers } from 'redux' ;
import blog from './requestReducer';
import message from './messageReducer.js'

const rootReducer= combineReducers({
blog,
message,

})
export default rootReducer ;