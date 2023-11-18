import {
  updateAttemptedWordles,
  updateCurrentGuess,
  updateHistory,
  updateSolution,
  updateSuccess,
  updateTurn,
} from '../store/Actions/wordleAction';

import { fiveLetterWords } from '../utils/data';
import { useDispatch } from 'react-redux';

const useRestart = () => {
  const dispatch = useDispatch();

  // generates the key WORDLE
  const generateSolution = () => {
    const randomWordIndex = Math.floor(Math.random() * fiveLetterWords.length);
    dispatch(updateSolution(fiveLetterWords[randomWordIndex]));
  };

  // restart back to default state
  const handleRestart = () => {
    generateSolution();
    dispatch(updateAttemptedWordles([...Array(6)]));
    dispatch(updateCurrentGuess(''));
    dispatch(updateHistory([]));
    dispatch(updateSuccess(false));
    dispatch(updateTurn(0));
    dispatch(updateCurrentGuess(''));
  };

  return { generateSolution, handleRestart };
};

export default useRestart;
