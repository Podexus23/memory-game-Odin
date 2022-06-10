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
      earlyGame(main, onBoard);
    } else if (
      allCards.score >= difficulty.easy.border &&
      allCards.score < difficulty.middle.border
    ) {
      middleGame(main, onBoard);
    } else if (
      allCards.score >= difficulty.middle.border &&
      allCards.score < difficulty.hard.border
    ) {
      endGame(main, onBoard);
    } else {
      console.log('ups, that all mate');
    }
    return onBoard;
  }

  function earlyGame(main, onBoard) {
    while (onBoard.length < difficulty.easy.cards) {
      let number = main[random(main.length)];
      if (!onBoard.includes(number)) onBoard.push(number);
    }
  }

  function middleGame(main, onBoard) {
    let cached = allCards.catchedPoke;
    while (onBoard.length < 4) {
      let numberMain = main[random(main.length)];
      let numberCached = cached[random(cached.length)];
      if (
        onBoard.includes(numberMain) ||
        allCards.catchedPoke.includes(numberMain)
      ) {
        console.log('already in array');
      } else onBoard.push(numberMain);
    }
  }

  function endGame(main, onBoard) {
    while (onBoard.length < 5) {
      let number = main[random(main.length)];
      if (onBoard.includes(number) || allCards.catchedPoke.includes(number)) {
        console.log('already in array');
      } else onBoard.push(number);
    }
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
