import { combineReducers } from 'redux'; //uvijek
import authReducer from './authReducer'; //google
import {reducer as formReducer} from 'redux-form'; //form, ovo as sluzi da umjesto reducer pisemo formReducer
import streamReducer from './streamReducer'

export default combineReducers({
    auth: authReducer, //google
    form: formReducer, //form
    streams: streamReducer
})