import './Keyboard.styles.css';

import {
  updateAttemptedWordles,
  updateCurrentGuess,
  updateHistory,
  updateSuccess,
  updateTurn,
} from '../../store/Actions/wordleAction';
import { useDispatch, useSelector } from 'react-redux';

import backspace from '../../assets/backspace.svg';
import { fiveLetterWords } from '../../utils/data';
import { formatGuess } from '../../utils/formatGuess';
import { keyboardKeys } from '../../utils/keyboard';
import { useEffect } from 'react';
import useRestart from '../../hooks/useRestart';

const Keyboard = () => {
  const dispatch = useDispatch();
  const { attemptedWordles, count, currentGuess, history, solution, turn } =
    useSelector((state) => state.wordle);
  const { handleRestart } = useRestart();
  // TODO: will implement clicking on KEYS
  const handleClick = (key) => {};

  // check if guess is correct
  // update attemptedWordles state
  const handleGuess = (guess) => {
    if (currentGuess === solution) {
      // updates SUCCESS to true, restart game
      dispatch(updateSuccess(true));
      handleRestart();
      window.alert(`Correct! Wordle is: ${solution}`);
      return;
    }

    // changes color of TILES
    const newAttemptedWordles = [...attemptedWordles];
    newAttemptedWordles[turn] = guess;
    dispatch(updateAttemptedWordles(newAttemptedWordles));
    dispatch(updateHistory(guess));
    dispatch(updateTurn(turn + 1));
    dispatch(updateCurrentGuess(''));
  };

  useEffect(() => {
    // TODO: move this to custom hook
    const handleType = ({ key }) => {
      // required 5 letters and unique
      if (key === 'Enter') {
        if (count < 5) {
          // ADD ERROR WINDOW
          window.alert('Used all guesses');
          return;
        }

        if (!fiveLetterWords.includes(currentGuess)) {
          window.alert('That is not a real word!');
          return;
        }

        if (history.includes(currentGuess)) {
          window.alert('Already tried the word, use different');
          return;
        }

        if (currentGuess.length !== 5) {
          window.alert('5 letter minimum... 5 letter max :)');
          return;
        }

        const formattedGuess = formatGuess(solution, currentGuess);
        handleGuess(formattedGuess);
      }

      // if BACKSPACE, remove last character
      if (key === 'Backspace') {
        const updatedGuess = currentGuess.slice(0, -1);
        dispatch(updateCurrentGuess(updatedGuess));
        return;
      }

      // REGEX to only allow letters
      if (/^[A-Za-z]$/.test(key)) {
        if (currentGuess.length < 5) {
          const updatedGuess = currentGuess + key;
          dispatch(updateCurrentGuess(updatedGuess));
        }
      }
    };

    window.addEventListener('keydown', handleType);

    return () => {
      window.removeEventListener('keydown', handleType);
    };
  }, [count, currentGuess, history, solution]);

  return (
    <div className="keyboard">
      {keyboardKeys.map((section) => (
        <div className="keyboard-row">
          {section.map((key) => (
            <button className="keyboard-key" onClick={(e) => handleClick(key)}>
              {key === 'backspace' ? (
                <img
                  src={backspace}
                  alt="backspace-key"
                  className="backspace-key"
                />
              ) : (
                key
              )}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
