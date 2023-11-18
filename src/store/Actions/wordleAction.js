import {
  UPDATE_ATTEMPTED_WORDLES,
  UPDATE_CURRENT_GUESS,
  UPDATE_HISTORY,
  UPDATE_SOLUTION,
  UPDATE_SUCCESS,
  UPDATE_TURN,
} from './actionTypes';

export const updateSolution = (data) => ({
  type: UPDATE_SOLUTION,
  payload: {
    solution: data,
  },
});

export const updateTurn = (data) => ({
  type: UPDATE_TURN,
  payload: {
    turn: data,
  },
});

export const updateCurrentGuess = (data) => ({
  type: UPDATE_CURRENT_GUESS,
  payload: {
    currentGuess: data,
  },
});

export const updateAttemptedWordles = (data) => ({
  type: UPDATE_ATTEMPTED_WORDLES,
  payload: {
    attemptedWordles: data,
  },
});

export const updateHistory = (data) => ({
  type: UPDATE_HISTORY,
  payload: {
    history: data,
  },
});

export const updateSuccess = (data) => ({
  type: UPDATE_SUCCESS,
  payload: {
    success: data,
  },
});
