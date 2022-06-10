function random(max) {
  return Math.floor(Math.random() * (max + 1));
}

let GameGenerator = (function () {
  let allCards = {
    mainPool: [],
    onBoard: [],
  };

  function makingCardPool(number) {
    const main = allCards.mainPool;
    while (main.length < number) {
      main.push(main.length + 1);
    }
  }

  function choosePlayableCards(score = 0) {
    const main = allCards.mainPool;
    const onBoard = allCards.onBoard;
    if (score < 3) {
      while (onBoard.length < 3) {
        let number = main[random(main.length)];
        if (onBoard.includes(number)) {
          console.log('already in array');
        } else onBoard.push(number);
      }
    }
    return onBoard;
  }
  return { allCards, makingCardPool, choosePlayableCards };
})();

export default GameGenerator;
