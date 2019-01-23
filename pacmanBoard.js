const board = [
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
[1, 8, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 8, 1], 
[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
[1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
[1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
[1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1], 
[1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 6, 1, 1, 6, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 6, 1, 1, 6, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 6, 'R', 6, 6, 6, 6, 6, 6, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 0, 6, 6, 6, 1, 'B', 1,'Pi', 1, 'O', 1, 1, 6, 6, 6, 0, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
[1, 8, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 8, 1], 
[1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 'P', 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1], 
[1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1], 
[1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1], 
[1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

/*
red (déja sorti) 11x 13y
blue 14x 12y
rose 14x 14y
orange 14x 16y
 */

const boxes = document.querySelectorAll('.container div');
const scoreNode = document.querySelector(".score__number");
let direction = 'right';
let test = false;
let turn = false;
let stopped = false;
let formerDirection = 'right';
let level = 1;
let animation;
let score = 0;
let i = 0;
let nextDirection;
let nextTurnDirection;

const numerote = () => {
  //Numérote les rangs et colonnes
  let row = 0;
  let column = 0;
  for (box of boxes) {
    if (column < 27) {
      box.dataset.row = row;
      box.dataset.column = column;
      column++;
    } else {
      box.dataset.row = row;
      box.dataset.column = column;
      row++;
      column = 0;
    }
  }
}

const initBoard = () =>{
  for (let i=0 ; i<board.length; i++){
    for(let j=0 ; j<board[i].length ; j++){
      let currentTile = document.querySelector(`div[data-row='${i}'][data-column='${j}']`);
      switch(board[i][j]){
        case 1: //1 is a wall
        currentTile.className = 'wall';
          break;
        case 0: // 0 is a dot
        currentTile.className = 'dot empty';
          break;
        case 8: // 8 is a big dot
        currentTile.className = 'big-dot dot empty';
          break;
        case 6://6 is a blank space
        currentTile.className = 'empty';
          break;
        case 'P'://P is pacman
        currentTile.className = 'empty pacman pacman-right';
          break;
        case 'R': //R is red (blinky)
          let blinky = document.createElement('img');
          blinky.src = "assets/img/red.png";
          currentTile.className = 'empty red';
          currentTile.appendChild(blinky);
          break;
        case 'B': //B is blue (inky)
          let inky = document.createElement('img');
          inky.src = "assets/img/blue.png";
          currentTile.className = 'empty blu';
          currentTile.appendChild(inky);
          break;
        case 'Pi': //P is pink (pinky)
          let pinky = document.createElement('img');
          pinky.src = "assets/img/pink.png";
          currentTile.className = 'empty pin';
          currentTile.appendChild(pinky);
          break;
        case 'O': //O is orange (clyde)
          let clyde = document.createElement('img');
          clyde.src = "assets/img/orange.png";
          currentTile.className = 'empty ora';
          currentTile.appendChild(clyde);
        break;
      }
    }
  }
}

const testNextBox = (direction) => {
  switch (direction){
    case "right":
        if(pacmanY+1 <=27 && board[pacmanX][pacmanY+1] !== 1){
            pacmanY = pacmanY+1;
          test = true;
        }
        else{
          test = false;
        }
      break;
    case "left":
      if(pacmanY-1 >=0 && board[pacmanX][pacmanY-1] !== 1){
          pacmanY = pacmanY-1;

        test = true;
      }
      else{
        test = false;
      }
      break;
    case "down":
      if(pacmanX+1 <= 30 && board[pacmanX+1][pacmanY] !== 1){
          pacmanX = pacmanX+1;
        test = true;
      }
      else{
        test = false;
      }
      break;
    case "up":
      if(pacmanX-1 >=0 && board[pacmanX-1][pacmanY] !== 1){
        pacmanX = pacmanX-1;
        test = true;
      }
      else{
        test = false;
      }
      break;
  }
}
const enemyDirection = enemy => {

}
const turning = element =>{
  element.classList.remove(`pacman-${direction}`);
  element.classList.add(`pacman-${nextDirection}`);
}

const move = (element, directionParam, former) => {
  element.style.transform = 'none';
  console.log(element)
  element.classList.remove('pacman');
  element.classList.remove(`pacman-${directionParam}`);
  element.classList.remove(`pacman-${formerDirection}`);
  nextBox = document.querySelector(`div[data-row='${pacmanX}'][data-column='${pacmanY}']`);
  nextBox.classList.add("pacman");
  nextBox.classList.add(`pacman-${directionParam}`);
  element = nextBox;
  if (former){
    formerDirection = directionParam;
  }
  if (nextBox.classList.contains('big-dot')){
    nextBox.classList.remove('big-dot');
    nextBox.classList.remove('dot');
    score += 50;
    scoreNode.innerHTML = score;
  }else if (nextBox.classList.contains('dot')){
    nextBox.classList.remove('dot');
    score += 10;
    scoreNode.innerHTML = score;
  }
  if (score >= (2610*level)){
    if (document.querySelectorAll('.dot').length === 0){
      level += 1;
      pacman = document.querySelector('.pacman');
      pacman.className = '';
      pacmanX = 23;
      pacmanY = 14;
      direction = 'right';
      test = false;
      stopped = true;
      initBoard();
      return;
    }
  }
  animation = requestAnimationFrame(() => animate(element, directionParam));
}

const animate =  (element, directionParam) => {
 /*  console.log(i); */
  if (i<100){
    if (i === 0){
     /*  console.log('debut'); */
      if (nextDirection){
        testNextBox(nextDirection);
        if (test){
          turn = true;
          cancelAnimationFrame(animation);
          turning(element);
          direction = nextDirection;
        }
        else{
          turn = false;
        }
      }
      if(nextDirection !== direction){
        testNextBox(directionParam);
      }
      if(turn){
        nextDirection = undefined;
        turn = false;
      } else if (!test && !turn){
        turn = false;
        stopped = true;
        /* console.log('stopped'); */
        return;
      }
    }
    switch (directionParam){
      case 'right':
        element.style.transform = `translateX(${i}%)`;
        break;
      case 'left':
        element.style.transform = `translateX(-${i}%)`;
        break;
      case 'down':
        element.style.transform = `translateY(${i}%)`;
        break;
      case 'up':
        element.style.transform = `translateY(-${i}%)`;
        break;
    }
    i += 10;
    animation = requestAnimationFrame(() => animate(element, direction));
  }
  else{
    i=0;
    cancelAnimationFrame(animation);
    if(test){
      move(element, direction, false);
    }
  }
}

const keydownHandler = e => {
  e.preventDefault();
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
    let input = e.key.substring(5).toLowerCase();
    pacman = document.querySelector('.pacman');
    if(!turn && test){
      nextDirection = input;
      if (nextDirection === direction){
        nextDirection = undefined;
      }
    }
    else if(stopped){
      stopped = false;
      turn = false;
      nextDirection = undefined;
      cancelAnimationFrame(animation);
      direction = input;
      move(pacman, direction, formerDirection);
    }
    console.log(direction);
  }
}

/*
red (déja sorti) 11x 13y
blue 14x 11y
rose 14x 13y
orange 14x 15y
*/

numerote();
initBoard();
let pacman = document.querySelector('.pacman');
let blinky = document.querySelector('.red');
let inky = document.querySelector('.blue');
let pinky = document.querySelector('.pink');
let clyde = document.querySelector('.orange');
let pacmanX = parseInt(pacman.dataset.row);
let pacmanY = parseInt(pacman.dataset.column);
let red = {x:11,y:13};
let blue = {x:14,y:11};
let pink = {x:14,y:13};
let orange = {x:14,y:15}; 
/* animate(pacman, 'right'); */
animate(pacman,'right');
document.addEventListener('keydown', keydownHandler);