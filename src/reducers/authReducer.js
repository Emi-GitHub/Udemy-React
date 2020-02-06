import {SIGN_IN, SIGN_OUT} from '../actions/types';

//google
const INTIAL_STATE = {
    isSingedIn: null,
    userId: null
}
//google
export default (state = INTIAL_STATE, action) => {
    switch(action.type){
        case SIGN_IN: return {...state, isSingedIn: true, userId: action.playload};
        case SIGN_OUT: return {...state, isSingedIn: false, userId: null}
        default: return state;
    }
}