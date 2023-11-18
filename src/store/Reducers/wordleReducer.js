import {
  UPDATE_ATTEMPTED_WORDLES,
  UPDATE_CURRENT_GUESS,
  UPDATE_HISTORY,
  UPDATE_SOLUTION,
  UPDATE_SUCCESS,
  UPDATE_TURN,
} from '../Actions/actionTypes';

const initialState = {
  solution: '',
  turn: 0,
  currentGuess: '',
  attemptedWordles: [...Array(6)],
  history: [],
  success: false,
};

const wordleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SOLUTION:
      return { ...state, solution: action.payload.solution };
    case UPDATE_TURN:
      return { ...state, turn: action.payload.turn };
    case UPDATE_CURRENT_GUESS:
      return { ...state, currentGuess: action.payload.currentGuess };
    case UPDATE_ATTEMPTED_WORDLES:
      return { ...state, attemptedWordles: action.payload.attemptedWordles };
    case UPDATE_HISTORY:
      return { ...state, history: action.payload.history };
    case UPDATE_SUCCESS:
      return { ...state, success: action.payload.success };
    default:
      return state;
  }
};

export default wordleReducer;
