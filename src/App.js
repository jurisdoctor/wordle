import './App.css';

import Board from './components/Board/Board';
import Keyboard from './components/Keyboard/Keyboard';
import { useEffect } from 'react';
import useRestart from './hooks/useRestart';

const App = () => {
  const { generateSolution } = useRestart();

  useEffect(() => {
    // For sake of time, importing local data & pick random word
    generateSolution();
  }, []);

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Board />
      <Keyboard />
    </div>
  );
};

export default App;
