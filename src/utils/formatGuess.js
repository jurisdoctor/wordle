export const formatGuess = (solution, currentGuess) => {
  // destructure string into array for easier comparison
  const solutionArr = [...solution];
  // take guess and set to `grey` initially
  const formattedGuess = [...currentGuess].map((letter) => ({
    key: letter,
    color: 'grey',
  }));

  // check for green letters
  formattedGuess.forEach((letter, index) => {
    if (solutionArr[index] === letter.key) {
      formattedGuess[index].color = 'green';
      solutionArr[index] = null;
    }
  });

  // check for yellow letters
  formattedGuess.forEach((letter, index) => {
    if (solutionArr.includes(letter.key) && letter.color !== 'green') {
      formattedGuess[index].color = 'yellow';
      solutionArr[solutionArr.indexOf(letter.key)] = null;
    }
  });

  return formattedGuess;
};
