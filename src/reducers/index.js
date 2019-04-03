import {combineReducers} from 'redux';
import appReducer from './app_reducer';

const rootReducer = combineReducers({
    astronomy: appReducer
})

export default rootReducer;