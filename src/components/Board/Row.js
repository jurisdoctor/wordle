const Row = ({ currentGuess, guess, key }) => {
  if (guess) {
    return (
      <div className="board-row" key={key}>
        {guess.map((letter, index) => (
          <div className={`board-tile ${letter.color}`} key={index}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    const letters = currentGuess.split('');

    return (
      <div className="board-row current">
        {letters.map((letter, index) => (
          <div className="board-tile filled" key={index}>
            {letter}
          </div>
        ))}
        {Array.from({ length: 5 - letters.length }).map((_, index) => (
          <div className="board-tile" key={index}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="board-row" key={key}>
      {Array.from({ length: 5 }).map((index) => (
        <div className="board-tile" key={index}></div>
      ))}
    </div>
  );
};

export default Row;
