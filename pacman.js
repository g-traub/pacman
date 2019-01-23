const board = [
 ['e','e','e','e','e','e','e','e','w','e','e','e','e','e','e','e','e'],
 ['e','w','w','e','w','w','w','e','w','e','w','w','w','e','w','w','e'],
 ['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],
 ['e','w','w','e','w','e','w','w','w','w','w','e','w','e','w','w','e'],
 ['e','e','e','e','w','e','e','e','w','e','e','e','w','e','e','e','e'],
 ['w','w','w','e','w','w','w','e','w','e','w','w','w','e','w','w','w'],
 ['w','w','w','e','w','e','e','e','e','e','e','e','w','e','w','w','w'],
 ['w','w','w','e','w','e','w','w','w','w','w','e','w','e','w','w','w'],
 ['e','e','e','e','e','e','w','w','w','w','w','e','e','e','e','e','e'],
 ['w','w','w','e','w','e','w','w','w','w','w','e','w','e','w','w','w'],
 ['w','w','w','e','w','e','e','e','e','e','e','e','w','e','w','w','w'],
 ['w','w','w','e','w','e','w','w','w','w','w','e','w','e','w','w','w'],
 ['e','e','e','e','e','e','e','e','w','e','e','e','e','e','e','e','e'],
 ['e','w','w','e','w','w','w','e','w','e','w','w','w','e','w','w','e'],
 ['e','e','w','e','e','e','e','e','e','e','e','e','e','e','w','e','e'],
 ['w','e','w','e','w','e','w','w','w','w','w','e','w','e','w','e','w'],
 ['e','e','e','e','w','e','e','e','w','e','e','e','w','e','e','e','e'],
 ['e','w','w','w','w','w','w','e','w','e','w','w','w','w','w','w','e'],
 ['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e']];
 
const boxes = document.querySelectorAll(".box");
const scoreNode = document.querySelector(".score__number");
let pacman = document.querySelector('.pacman');
let direction = 'right';
let test = false;
let turn = false;
let stopped = false;
let formerDirection = 'right';
let animation;
let score = 0;
let i = 0;
let nextDirection;

const initGame = () => {
  //Numérote les rangs et colonnes
  let row = 0;
  let column = 0;
  for (box of boxes) {
    if (column < 16) {
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

const testNextBox = direction => {
  switch (direction) {
    case "right":
        if(pacmanY+1 <=16 && board[pacmanX][pacmanY+1] === "e"){
          pacmanY = pacmanY+1;
          test = true;
        }
        else{
          test = false;
        }
      break;
    case "left":
      if(pacmanY-1 >=0 && board[pacmanX][pacmanY-1] === "e"){
        pacmanY = pacmanY-1;
        test = true;
      }
      else{
        test = false;
      }
      break;
    case "down":
      if(pacmanX+1 <= 18 && board[pacmanX+1][pacmanY] === "e"){
        pacmanX = pacmanX+1;
        test = true;
      }
      else{
        test = false;
      }
      break;
    case "up":
      if(pacmanX-1 >=0 && board[pacmanX-1][pacmanY] === "e"){
        pacmanX = pacmanX-1;
        test = true;
      }
      else{
        test = false;
      }
      break;
  }
}

const move = (element, direction, former) => {
  element.style.transform = "none";
  element.classList.remove("pacman");
  element.classList.remove(`pacman-${direction}`);
  element.classList.remove(`pacman-${formerDirection}`);
  nextBox = document.querySelector(`.empty[data-row='${pacmanX}'][data-column='${pacmanY}']`);
  nextBox.classList.add("pacman");
  nextBox.classList.add(`pacman-${direction}`);
  element = nextBox;
  if (former){
    formerDirection = direction;
  }
  if (nextBox.classList.contains('dot')){
    nextBox.classList.remove('dot');
    score += 10;
    scoreNode.innerHTML = score;
  }else if (nextBox.classList.contains('big-dot')){
    nextBox.classList.remove('big-dot');
    score += 50;
    scoreNode.innerHTML = score;
  }
  animation = requestAnimationFrame(() => animate(element, direction));
}

const animate =  (element, directionParam) => {
  console.log(i);
  if (i<100){
    if (i === 0){
      console.log('debut');
      if (nextDirection){
        testNextBox(nextDirection);
        if (test){
          turn = true;
          nextTurnDirection = nextDirection;
        }
        else{
          turn = false;
        }
      }
      testNextBox(directionParam);
      if(!test && !turn){
        turn = false;
        stopped = true;
        console.log('stopped');
        return;
      }
    }
    else if( i === 50 && turn === true){
      console.log('turn');
      i=0;
      turn = false;
      cancelAnimationFrame(animation);
      move(element, nextTurnDirection, formerDirection);
      direction = nextDirection;
      nextTurnDirection = undefined;
      nextDirection = undefined;
      return;
    }
    switch (directionParam) {
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
    animation = requestAnimationFrame(() => animate(element, directionParam));
  }
  else{
    i=0;
    cancelAnimationFrame(animation);
    console.log('canceled');
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
    if(formerDirection !== input && !turn && test){
      nextDirection = input;
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
};

initGame();
let pacmanX = parseInt(pacman.dataset.row);
let pacmanY = parseInt(pacman.dataset.column);
animate(pacman, 'right');
document.addEventListener('keydown', keydownHandler);