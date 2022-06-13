function random(max) {
  return Math.floor(Math.random() * max);
}

let GameGenerator = (function () {
  let allCards = {
    mainPool: [],
    onBoard: [],
    catchedPoke: [],
    score: 0,
  };

  let difficulty = {
    easy: {
      border: 2,
      cards: 3,
    },
    middle: {
      border: 5,
      cards: 4,
    },
    hard: {
      //adds by function makingCardPool
      border: allCards.mainPool.length,
      cards: 5,
    },
  };

  function makingCardPool(number) {
    const main = allCards.mainPool;
    while (main.length < number) {
      main.push(main.length + 1);
    }
    difficulty.hard.border = number;
  }

  function choosePlayableCards() {
    const main = allCards.mainPool;
    const onBoard = allCards.onBoard;
    if (allCards.score < difficulty.easy.border) {
      _earlyGame(main, onBoard);
    } else if (
      allCards.score >= difficulty.easy.border &&
      allCards.score < difficulty.middle.border
    ) {
      _middleGame(main, onBoard);
    } else if (
      allCards.score >= difficulty.middle.border &&
      allCards.score < difficulty.hard.border
    ) {
      _endGame(main, onBoard);
    } else {
      console.log('ups, that all mate');
    }
    return onBoard;
  }

  function _earlyGame(main, onBoard) {
    while (onBoard.length < difficulty.easy.cards) {
      let number = main[random(main.length)];
      if (!onBoard.includes(number)) onBoard.push(number);
    }
  }

  function _middleGame(main, onBoard) {
    let cached = allCards.catchedPoke;
    while (onBoard.length < difficulty.middle.cards) {
      let numberMain = main[random(main.length)];
      let numberCached = cached[random(cached.length)];

      if (onBoard.length === difficulty.middle.cards - 1) {
        onBoard.push(numberCached);
        allCards.onBoard = _shuffleBoard(onBoard);
      } else if (!onBoard.includes(numberMain)) onBoard.push(numberMain);
    }
    console.log('hi from mid');
  }

  function _endGame(main, onBoard) {
    let cached = allCards.catchedPoke;
    while (onBoard.length < difficulty.hard.cards) {
      let numberMain = main[random(main.length)];
      let numberCached = cached[random(cached.length)];

      if (onBoard.length >= difficulty.hard.cards - 2) {
        if (!onBoard.includes(numberCached)) onBoard.push(numberCached);
        allCards.onBoard = _shuffleBoard(onBoard);
      } else if (!onBoard.includes(numberMain)) onBoard.push(numberMain);
    }
  }

  function _shuffleBoard(cards) {
    console.log(cards);
    let shuffled = cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    console.log(shuffled);
    return shuffled;
  }

  function cardClicked(id, score) {
    allCards.mainPool = allCards.mainPool.filter((e) => e !== id);
    allCards.catchedPoke.push(id);
    allCards.score = score;
    allCards.onBoard = [];
  }

  return { allCards, makingCardPool, choosePlayableCards, cardClicked };
})();

export default GameGenerator;
