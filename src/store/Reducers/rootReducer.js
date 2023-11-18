import { combineReducers } from 'redux';
import wordleReducer from './wordleReducer';

const rootReducer = combineReducers({ wordle: wordleReducer });

export default rootReducer;
