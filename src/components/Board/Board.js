import './Board.styles.css';

import Row from './Row';
import { useSelector } from 'react-redux';

const Board = () => {
  const { attemptedWordles, currentGuess, turn } = useSelector(
    (state) => state.wordle
  );

  return (
    <div className="board">
      {Array.from(attemptedWordles).map((wordle, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guess={wordle} />;
      })}
    </div>
  );
};

export default Board;
