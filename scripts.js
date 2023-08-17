const gridRow1Block1 = document.querySelector('.js-row1-block1');
const gridRow1Block2 = document.querySelector('.js-row1-block2');
const gridRow1Block3 = document.querySelector('.js-row1-block3');

const gridRow2Block1 = document.querySelector('.js-row2-block1');
const gridRow2Block2 = document.querySelector('.js-row2-block2');
const gridRow2Block3 = document.querySelector('.js-row2-block3');

const gridRow3Block1 = document.querySelector('.js-row3-block1');
const gridRow3Block2 = document.querySelector('.js-row3-block2');
const gridRow3Block3 = document.querySelector('.js-row3-block3');

const resultElement = document.querySelector('.js-display-result');
const startButton = document.querySelector('.js-start-button');


let grid = {
  row1: {
    block1: 0,
    block2: 0,
    block3: 0,
  },
  row2: {
    block1: 0,
    block2: 0,
    block3: 0,
  },
  row3: {
    block1: 0,
    block2: 0,
    block3: 0,
  }
}
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}
let moves = 0;
updateScore();

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    grid.row1.block1 = 0;
    grid.row1.block2 = 0;
    grid.row1.block3 = 0;
  
    grid.row2.block1 = 0;
    grid.row2.block2 = 0;
    grid.row2.block3 = 0;
  
    grid.row3.block1 = 0;
    grid.row3.block2 = 0;
    grid.row3.block3 = 0;

    gridRow1Block1.innerHTML = '';
    gridRow1Block2.innerHTML = '';
    gridRow1Block3.innerHTML = '';
    gridRow2Block1.innerHTML = '';
    gridRow2Block2.innerHTML = '';
    gridRow2Block3.innerHTML = '';
    gridRow3Block1.innerHTML = '';
    gridRow3Block2.innerHTML = '';
    gridRow3Block3.innerHTML = '';

    gridRow1Block1.classList.remove('on-click');
    gridRow1Block2.classList.remove('on-click');
    gridRow1Block3.classList.remove('on-click');
    gridRow2Block1.classList.remove('on-click');
    gridRow2Block2.classList.remove('on-click');
    gridRow2Block3.classList.remove('on-click');
    gridRow3Block1.classList.remove('on-click');
    gridRow3Block2.classList.remove('on-click');
    gridRow3Block3.classList.remove('on-click');

    gridRow1Block1.classList.remove('on-click-computer');
    gridRow1Block2.classList.remove('on-click-computer');
    gridRow1Block3.classList.remove('on-click-computer');
    gridRow2Block1.classList.remove('on-click-computer');
    gridRow2Block2.classList.remove('on-click-computer');
    gridRow2Block3.classList.remove('on-click-computer');
    gridRow3Block1.classList.remove('on-click-computer');
    gridRow3Block2.classList.remove('on-click-computer');
    gridRow3Block3.classList.remove('on-click-computer');

    document.querySelector('.js-display-result')
    .innerHTML = ``;

    moves = 0;
  })
  document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    localStorage.removeItem('score');
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
  })

function checkMove() {
  // Warianty poziome
  if (grid.row1.block1 === 1 && grid.row1.block2 === 1 && grid.row1.block3 === 1) {
    score.wins++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'You Win';
    showResult(result);
    resetMoves();
    return result;
  }
  if (grid.row2.block1 === 1 && grid.row2.block2 === 1 && grid.row2.block3 === 1) {
    score.wins++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'You Win';
    showResult(result);
    resetMoves();
    return result;
  }
  if (grid.row3.block1 === 1 && grid.row3.block2 === 1 && grid.row3.block3 === 1) {
    score.wins++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'You Win';
    showResult(result);
    resetMoves();
    return result;
  }

  // Warianty pionowe
  if (grid.row1.block1 === 1 && grid.row2.block1 === 1 && grid.row3.block1 === 1) {
    score.wins++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'You Win';
    showResult(result);
    resetMoves();
    return result;
  }
  if (grid.row1.block2 === 1 && grid.row2.block2 === 1 && grid.row3.block2 === 1) {
    score.wins++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'You Win';
    showResult(result);
    resetMoves();
    return result;
  }
  if (grid.row1.block3 === 1 && grid.row2.block3 === 1 && grid.row3.block3 === 1) {
    score.wins++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'You Win';
    showResult(result);
    resetMoves();
    return result;
  }

  // Warianty po skosie
  if (grid.row1.block1 === 1 && grid.row2.block2 === 1 && grid.row3.block3 === 1) {
    score.wins++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'You Win';
    showResult(result);
    resetMoves();
    return result;
  }
  if (grid.row1.block3 === 1 && grid.row2.block2 === 1 && grid.row3.block1 === 1) {
    score.wins++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'You Win';
    showResult(result);
    resetMoves();
    return result;
  }

  // RUCHY KOMPUTERA

  // Warianty poziome
  if (grid.row1.block1 === 2 && grid.row1.block2 === 2 && grid.row1.block3 === 2) {
    score.losses++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'Computer Win';
    showResult(result);
    resetMoves();
    return result;
  }
  if (grid.row2.block1 === 2 && grid.row2.block2 === 2 && grid.row2.block3 === 2) {
    score.losses++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'Computer Win';
    showResult(result);
    resetMoves();
    return result;
  }
  if (grid.row3.block1 === 2 && grid.row3.block2 === 2 && grid.row3.block3 === 2) {
    score.losses++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'Computer Win';
    showResult(result);
    resetMoves();
    return result;
  }

  // Warianty pionowe
  if (grid.row1.block1 === 2 && grid.row2.block1 === 2 && grid.row3.block1 === 2) {
    score.losses++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'Computer Win';
    showResult(result);
    resetMoves();
    return result;
  }
  if (grid.row1.block2 === 2 && grid.row2.block2 === 2 && grid.row3.block2 === 2) {
    score.losses++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'Computer Win';
    showResult(result);
    resetMoves();
    return result;
  }
  if (grid.row1.block3 === 2 && grid.row2.block3 === 2 && grid.row3.block3 === 2) {
    score.losses++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'Computer Win';
    showResult(result);
    resetMoves();
    return result;
  }

  // Warianty po skosie
  if (grid.row1.block1 === 2 && grid.row2.block2 === 2 && grid.row3.block3 === 2) {
    score.losses++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'Computer Win';
    showResult(result);
    resetMoves();
    return result;
  }
  if (grid.row1.block3 === 2 && grid.row2.block2 === 2 && grid.row3.block1 === 2) {
    score.losses++;
    localStorage.setItem('score', JSON.stringify(score));
    const result = 'Computer Win';
    showResult(result);
    resetMoves();
    return result;
  }
  if (moves === 10) {
    resultElement.innerHTML = `<p class="result">Tie</p>`;
    moves = 0;
    score.ties++;
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    resetMoves();
  }
  localStorage.setItem('score', JSON.stringify(score));
}
function showResult(result) {
  document.querySelector('.js-display-result')
    .innerHTML = `
      <p class="result">${result}</p>
    `;
}
function resetMoves() {
  setTimeout(() => {
    grid.row1.block1 = 0;
    grid.row1.block2 = 0;
    grid.row1.block3 = 0;
  
    grid.row2.block1 = 0;
    grid.row2.block2 = 0;
    grid.row2.block3 = 0;
  
    grid.row3.block1 = 0;
    grid.row3.block2 = 0;
    grid.row3.block3 = 0;

    gridRow1Block1.innerHTML = '';
    gridRow1Block2.innerHTML = '';
    gridRow1Block3.innerHTML = '';
    gridRow2Block1.innerHTML = '';
    gridRow2Block2.innerHTML = '';
    gridRow2Block3.innerHTML = '';
    gridRow3Block1.innerHTML = '';
    gridRow3Block2.innerHTML = '';
    gridRow3Block3.innerHTML = '';

    gridRow1Block1.classList.remove('on-click');
    gridRow1Block2.classList.remove('on-click');
    gridRow1Block3.classList.remove('on-click');
    gridRow2Block1.classList.remove('on-click');
    gridRow2Block2.classList.remove('on-click');
    gridRow2Block3.classList.remove('on-click');
    gridRow3Block1.classList.remove('on-click');
    gridRow3Block2.classList.remove('on-click');
    gridRow3Block3.classList.remove('on-click');

    gridRow1Block1.classList.remove('on-click-computer');
    gridRow1Block2.classList.remove('on-click-computer');
    gridRow1Block3.classList.remove('on-click-computer');
    gridRow2Block1.classList.remove('on-click-computer');
    gridRow2Block2.classList.remove('on-click-computer');
    gridRow2Block3.classList.remove('on-click-computer');
    gridRow3Block1.classList.remove('on-click-computer');
    gridRow3Block2.classList.remove('on-click-computer');
    gridRow3Block3.classList.remove('on-click-computer');

    document.querySelector('.js-display-result')
    .innerHTML = ``;

  }, 1400)
}
function computerMove() {
  for (let i = 0; i < 100; i++) {
    let randomNumber = Math.random();

    if (randomNumber < 1 / 10) {
      if (grid.row1.block1 === 1) {
        continue;
      } else {
        if (grid.row1.block1 === 2) {
          continue
        } else {
          grid.row1.block1 = 2;
          gridRow1Block1.innerHTML = 'O';
          gridRow1Block1.classList.add('on-click-computer');
          break;
        }
      }
    } 
    else if (randomNumber < 2 / 10) {
      if (grid.row1.block2 === 1) {
        continue;
      } else {
        if (grid.row1.block2 === 2) {
          continue
        } else {
          grid.row1.block2 = 2;
          gridRow1Block2.innerHTML = 'O';
          gridRow1Block2.classList.add('on-click-computer');
          break;
        }
      }
    } 
    else if (randomNumber < 3 / 10) {
      if (grid.row1.block3 === 1) {
        continue;
      } else {
        if (grid.row1.block3 === 2) {
          continue
        } else {
          grid.row1.block3 = 2;
          gridRow1Block3.innerHTML = 'O';
          gridRow1Block3.classList.add('on-click-computer');
          break;
        };
      }
    } 
    else if (randomNumber < 4 / 10) {
      if (grid.row2.block1 === 1) {
        continue;
      } else {
        if (grid.row2.block1 === 2) {
          continue
        } else {
          grid.row2.block1 = 2;
          gridRow2Block1.innerHTML = 'O';
          gridRow2Block1.classList.add('on-click-computer');
          break;
        }
      }
    } 
    else if (randomNumber < 5 / 10) {
      if (grid.row2.block2 === 1) {
        continue;
      } else {
        if (grid.row2.block2 === 2) {
          continue
        } else {
          grid.row2.block2 = 2;
          gridRow2Block2.innerHTML = 'O';
          gridRow2Block2.classList.add('on-click-computer');
          break;
        }
      }
    } 
    else if (randomNumber < 6 / 10) {
      if (grid.row2.block3 === 1) {
        continue;
      } else {
        if (grid.row2.block3 === 2) {
          continue
        } else {
          grid.row2.block3 = 2;
          gridRow2Block3.innerHTML = 'O';
          gridRow2Block3.classList.add('on-click-computer');
          break;
        }
      }
    } 
    else if (randomNumber < 7 / 10) {
      if (grid.row3.block1 === 1) {
        continue;
      } else {
        if (grid.row3.block1 === 2) {
          continue
        } else {
          grid.row3.block1 = 2;
          gridRow3Block1.innerHTML = 'O';
          gridRow3Block1.classList.add('on-click-computer');
          break;
        }
      }
    } 
    else if (randomNumber < 8 / 10) {
      if (grid.row3.block2 === 1) {
        continue;
      } else {
        if (grid.row3.block2 === 2) {
          continue
        } else {
          grid.row3.block2 = 2;
          gridRow3Block2.innerHTML = 'O';
          gridRow3Block2.classList.add('on-click-computer');
          break;
        }
      }
    } 
    else {
      if (grid.row3.block3 === 1) {
        continue;
      } else {
        if (grid.row3.block3 === 2) {
          continue
        } else {
          grid.row3.block3 = 2;
          gridRow3Block3.innerHTML = 'O';
          gridRow3Block3.classList.add('on-click-computer');
          break;
        }
      }
    };
  }
}
function updateScore() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}
function autoPlayPlayer() {
  let randomNumber = Math.random();

    if (randomNumber < 1 / 10) {
      gridRow1Block1.classList.add('on-click');
      if (grid.row1.block1 === 1) {
        return;
      }
      if (grid.row1.block1 === 2) {
        return;
      }
      if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
        return;
      }
  
      moves += 1;
      grid.row1.block1 = 1
      gridRow1Block1.innerHTML = 'X';
  
      if (checkMove() === 'You Win') {
        moves = 0;
        updateScore();
        return;
      }
      computerMove();
      moves += 1;
      if (checkMove() === 'Computer Win') {
        moves = 0;
        updateScore();
        return;
      }
      checkMove()
    } 
    else if (randomNumber < 2 / 10) {
      gridRow1Block2.classList.add('on-click');
      if (grid.row1.block2 === 1) {
        return;
      }
      if (grid.row1.block2 === 2) {
        return;
      }
      if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
        return;
      }
  
      moves += 1;
      grid.row1.block2 = 1
      gridRow1Block2.innerHTML = 'X';
  
      if (checkMove() === 'You Win') {
        moves = 0;
        updateScore();
        return;
      }
      computerMove();
      moves += 1;
      if (checkMove() === 'Computer Win') {
        moves = 0;
        updateScore();
        return;
      }
      checkMove()
    } 
    else if (randomNumber < 3 / 10) {
      gridRow1Block3.classList.add('on-click');
      if (grid.row1.block3 === 1) {
        return;
      }
      if (grid.row1.block3 === 2) {
        return;
      }
      if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
        return;
      }
  
      moves += 1;
      grid.row1.block3 = 1
      gridRow1Block3.innerHTML = 'X';
  
      if (checkMove() === 'You Win') {
        moves = 0;
        updateScore();
        return;
      }
      computerMove();
      moves += 1;
      if (checkMove() === 'Computer Win') {
        moves = 0;
        updateScore();
        return;
      }
      checkMove()
    } 
    else if (randomNumber < 4 / 10) {
      gridRow2Block1.classList.add('on-click');
      if (grid.row2.block1 === 1) {
        return;
      }
      if (grid.row2.block1 === 2) {
        return;
      }
      if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
        return;
      }
  
      moves += 1;
      grid.row2.block1 = 1
      gridRow2Block1.innerHTML = 'X';
  
      if (checkMove() === 'You Win') {
        moves = 0;
        updateScore();
        return;
      }
      computerMove();
      moves += 1;
      if (checkMove() === 'Computer Win') {
        moves = 0;
        updateScore();
        return;
      }
      checkMove()
    } 
    else if (randomNumber < 5 / 10) {
      gridRow2Block2.classList.add('on-click');
      if (grid.row2.block2 === 1) {
        return;
      }
      if (grid.row2.block2 === 2) {
        return;
      }
      if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
        return;
      }
  
      moves += 1;
      grid.row2.block2 = 1
      gridRow2Block2.innerHTML = 'X';
  
      if (checkMove() === 'You Win') {
        moves = 0;
        updateScore();
        return;
      }
      computerMove();
      moves += 1;
      if (checkMove() === 'Computer Win') {
        moves = 0;
        updateScore();
        return;
      }
      checkMove()
    } 
    else if (randomNumber < 6 / 10) {
      gridRow2Block3.classList.add('on-click');
      if (grid.row2.block3 === 1) {
        return;
      }
      if (grid.row2.block3 === 2) {
        return;
      }
      if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
        return;
      }
  
      moves += 1;
      grid.row2.block3 = 1
      gridRow2Block3.innerHTML = 'X';
  
      if (checkMove() === 'You Win') {
        moves = 0;
        updateScore();
        return;
      }
      computerMove();
      moves += 1;
      if (checkMove() === 'Computer Win') {
        moves = 0;
        updateScore();
        return;
      }
      checkMove()
    } 
    else if (randomNumber < 7 / 10) {
      gridRow3Block1.classList.add('on-click');
      if (grid.row3.block1 === 1) {
        return;
      }
      if (grid.row3.block1 === 2) {
        return;
      }
      if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
        return;
      }
  
      moves += 1;
      grid.row3.block1 = 1
      gridRow3Block1.innerHTML = 'X';
  
      if (checkMove() === 'You Win') {
        moves = 0;
        updateScore();
        return;
      }
      computerMove();
      moves += 1;
      if (checkMove() === 'Computer Win') {
        moves = 0;
        updateScore();
        return;
      }
      checkMove()
    } 
    else if (randomNumber < 8 / 10) {
      gridRow3Block2.classList.add('on-click');
      if (grid.row3.block2 === 1) {
        return;
      }
      if (grid.row3.block2 === 2) {
        return;
      }
      if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
        return;
      }
  
      moves += 1;
      grid.row3.block2 = 1
      gridRow3Block2.innerHTML = 'X';
  
      if (checkMove() === 'You Win') {
        moves = 0;
        updateScore();
        return;
      }
      computerMove();
      moves += 1;
      if (checkMove() === 'Computer Win') {
        moves = 0;
        updateScore();
        return;
      }
      checkMove()
    } 
    else {
      gridRow3Block3.classList.add('on-click');
      if (grid.row3.block3 === 1) {
        return;
      }
      if (grid.row3.block3 === 2) {
        return;
      }
      if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
        return;
      }
  
      moves += 1;
      grid.row3.block3 = 1
      gridRow3Block3.innerHTML = 'X';
  
      if (checkMove() === 'You Win') {
        moves = 0;
        updateScore();
        return;
      }
      computerMove();
      moves += 1;
      if (checkMove() === 'Computer Win') {
        moves = 0;
        updateScore();
        return;
      }
      checkMove()
    }

}

// 1
gridRow1Block1
  .addEventListener('click', () => {
    gridRow1Block1.classList.add('on-click');
    if (grid.row1.block1 === 1) {
      return;
    }
    if (grid.row1.block1 === 2) {
      return;
    }
    if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
      return;
    }

    moves += 1;
    grid.row1.block1 = 1
    gridRow1Block1.innerHTML = 'X';

    if (checkMove() === 'You Win') {
      moves = 0;
      updateScore();
      return;
    }
    computerMove();
    moves += 1;
    if (checkMove() === 'Computer Win') {
      moves = 0;
      updateScore();
      return;
    }
    checkMove()
  })
// 2
gridRow1Block2
  .addEventListener('click', () => {
    gridRow1Block2.classList.add('on-click');
    if (grid.row1.block2 === 1) {
      return;
    }
    if (grid.row1.block2 === 2) {
      return;
    }
    if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
      return;
    }

    moves += 1;
    grid.row1.block2 = 1
    gridRow1Block2.innerHTML = 'X';

    if (checkMove() === 'You Win') {
      moves = 0;
      updateScore();
      return;
    }
    computerMove();
    moves += 1;
    if (checkMove() === 'Computer Win') {
      moves = 0;
      updateScore();
      return;
    }
    checkMove()
  })
// 3
gridRow1Block3
  .addEventListener('click', () => {
    gridRow1Block3.classList.add('on-click');
    if (grid.row1.block3 === 1) {
      return;
    }
    if (grid.row1.block3 === 2) {
      return;
    }
    if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
      return;
    }

    moves += 1;
    grid.row1.block3 = 1
    gridRow1Block3.innerHTML = 'X';

    if (checkMove() === 'You Win') {
      moves = 0;
      updateScore();
      return;
    }
    computerMove();
    moves += 1;
    if (checkMove() === 'Computer Win') {
      moves = 0;
      updateScore();
      return;
    }
    checkMove()
  })
// 4
gridRow2Block1
  .addEventListener('click', () => {
    gridRow2Block1.classList.add('on-click');
    if (grid.row2.block1 === 1) {
      return;
    }
    if (grid.row2.block1 === 2) {
      return;
    }
    if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
      return;
    }

    moves += 1;
    grid.row2.block1 = 1
    gridRow2Block1.innerHTML = 'X';

    if (checkMove() === 'You Win') {
      moves = 0;
      updateScore();
      return;
    }
    computerMove();
    moves += 1;
    if (checkMove() === 'Computer Win') {
      moves = 0;
      updateScore();
      return;
    }
    checkMove()
  })
// 5
gridRow2Block2
  .addEventListener('click', () => {
    gridRow2Block2.classList.add('on-click');
    if (grid.row2.block2 === 1) {
      return;
    }
    if (grid.row2.block2 === 2) {
      return;
    }
    if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
      return;
    }

    moves += 1;
    grid.row2.block2 = 1
    gridRow2Block2.innerHTML = 'X';

    if (checkMove() === 'You Win') {
      moves = 0;
      updateScore();
      return;
    }
    computerMove();
    moves += 1;
    if (checkMove() === 'Computer Win') {
      moves = 0;
      updateScore();
      return;
    }
    checkMove()
  })
// 6
gridRow2Block3
  .addEventListener('click', () => {
    gridRow2Block3.classList.add('on-click');
    if (grid.row2.block3 === 1) {
      return;
    }
    if (grid.row2.block3 === 2) {
      return;
    }
    if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
      return;
    }

    moves += 1;
    grid.row2.block3 = 1
    gridRow2Block3.innerHTML = 'X';

    if (checkMove() === 'You Win') {
      moves = 0;
      updateScore();
      return;
    }
    computerMove();
    moves += 1;
    if (checkMove() === 'Computer Win') {
      moves = 0;
      updateScore();
      return;
    }
    checkMove()
  })
// 7
gridRow3Block1
  .addEventListener('click', () => {
    gridRow3Block1.classList.add('on-click');
    if (grid.row3.block1 === 1) {
      return;
    }
    if (grid.row3.block1 === 2) {
      return;
    }
    if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
      return;
    }

    moves += 1;
    grid.row3.block1 = 1
    gridRow3Block1.innerHTML = 'X';

    if (checkMove() === 'You Win') {
      moves = 0;
      updateScore();
      return;
    }
    computerMove();
    moves += 1;
    if (checkMove() === 'Computer Win') {
      moves = 0;
      updateScore();
      return;
    }
    checkMove()
  })
// 8
gridRow3Block2
  .addEventListener('click', () => {
    gridRow3Block2.classList.add('on-click');
    if (grid.row3.block2 === 1) {
      return;
    }
    if (grid.row3.block2 === 2) {
      return;
    }
    if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
      return;
    }

    moves += 1;
    grid.row3.block2 = 1
    gridRow3Block2.innerHTML = 'X';

    if (checkMove() === 'You Win') {
      moves = 0;
      updateScore();
      return;
    }
    computerMove();
    moves += 1;
    if (checkMove() === 'Computer Win') {
      moves = 0;
      updateScore();
      return;
    }
    checkMove()
  })
// 9
gridRow3Block3
  .addEventListener('click', () => {
    gridRow3Block3.classList.add('on-click');
    if (grid.row3.block3 === 1) {
      return;
    }
    if (grid.row3.block3 === 2) {
      return;
    }
    if (checkMove() === 'You Win' || checkMove() === 'Computer Win') {
      return;
    }

    moves += 1;
    grid.row3.block3 = 1
    gridRow3Block3.innerHTML = 'X';

    if (checkMove() === 'You Win') {
      moves = 0;
      updateScore();
      return;
    }
    computerMove();
    moves += 1;
    if (checkMove() === 'Computer Win') {
      moves = 0;
      updateScore();
      return;
    }
    checkMove()
  })

let isPlay = false;
let intervalId = '';

function autoPlay() {
  if (!isPlay) {
    document.querySelector('.js-auto-play-button')
        .innerHTML = 'Lodaing...';
    intervalId = setInterval(() => {
      document.querySelector('.js-auto-play-button')
        .innerHTML = 'Auto Playing';
      autoPlayPlayer()
      isPlay = true
    }, 1400)
  } else {
    document.querySelector('.js-auto-play-button')
        .innerHTML = 'Auto Play';
    clearInterval(intervalId);
    isPlay = false;
  }
}

document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  })
