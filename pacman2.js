const initialBoard = [
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
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 6, 6, 6, 'R', 6, 6, 6, 6, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
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

  let board = [
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
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 6, 6, 6, 'R', 6, 6, 6, 6, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
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
blue 14x 11y
rose 14x 13y
orange 14x 15y
*/

const boxes = document.querySelectorAll('.container div');
const gridWidth = 27;
const gridHeight = 30;
const scoreNode =  document.querySelector('.score__number');
const livesNode = document.querySelector('.lives');
const gameoverNodes = document.querySelector('.gameover');
const gameOnNodes = document.querySelector('.gameOn');
const highScoreNode = document.querySelector('.highScore');

let score = 0;
let lives = 1;
let reset = true;
let game = true;
let level = 1;
let levelUp = false;
let ghostmode = false;
let pacman;
let blinky;
let inky;
let pinky;
let clyde;

//variables d'intervals et de timeout pour pouvoir les arreter lors d'un reset
let timeoutPinky;
let timeoutInky;
let timeoutClyde;

const numerote = () => {
  //Numérote les rangs et colonnes
  let row = 0;
  let column = 0;
  for (box of boxes) {
    if (column < gridWidth) {
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

const initBoard = (board) =>{
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
          blinky.src = "assets/img/blinky.png";
          blinky.id = 'blinky';
          currentTile.className = 'empty ghost blinky';
          currentTile.appendChild(blinky);
          break;
        case 'B': //B is blue (inky)
          let inky = document.createElement('img');
          inky.src = "assets/img/inky.png";
          inky.id = 'inky';
          currentTile.className = 'empty ghost inky';
          currentTile.appendChild(inky);
          break;
        case 'Pi': //P is pink (pinky)
          let pinky = document.createElement('img');
          pinky.src = "assets/img/pinky.png";
          pinky.id = 'pinky';
          currentTile.className = 'empty ghost pinky';
          currentTile.appendChild(pinky);
          break;
        case 'O': //O is orange (clyde)
          let clyde = document.createElement('img');
          clyde.src = "assets/img/clyde.png";
          clyde.id = 'clyde';
          currentTile.className = 'empty ghost clyde';
          currentTile.appendChild(clyde);
        break;
      }
    }
  }
}

const resetPositions = () => {
  console.log('reset');
  reset = true;
  //pacman
  cancelAnimationFrame(pacman.animation);
  pacman.tile.className = 'empty';
  pacman.tile.style.transform = 'none';
  pacman.i = 0;
  pacman.direction ='right';
  pacman.nextDirection = undefined;
  pacman.stopped = true;
  pacman.test = true;
  pacman.turnTest = false;
  pacman.x = 23;
  pacman.y = 14;
  pacman.tile = document.querySelector(`div[data-row='${pacman.x}'][data-column='${pacman.y}']`);

  //ghosts
  cancelAnimationFrame(blinky.animation);
  cancelAnimationFrame(inky.animation);cancelAnimationFrame(pinky.animation);cancelAnimationFrame(clyde.animation);
  clearTimeout(timeoutPinky);
  clearTimeout(timeoutInky);
  clearTimeout(timeoutClyde);
  clearTimeout(blinky.offTimeout);
  clearTimeout(inky.offTimeout);
  clearTimeout(pinky.offTimeout);
  clearTimeout(clyde.offTimeout);
  clearTimeout(blinky.blinkTimeout);
  clearTimeout(inky.blinkTimeout);
  clearTimeout(pinky.blinkTimeout);
  clearTimeout(clyde.blinkTimeout);
  clearInterval(blinky.interval);
  clearInterval(inky.interval);
  clearInterval(pinky.interval);
  clearInterval(clyde.interval);

  blinky.i = 0;
  blinky.tile.className = 'empty';
  blinky.tile.innerHTML = '';
  blinky.x = 11;
  blinky.y = 13;
  blinky.tile = document.querySelector(`div[data-row='${blinky.x}'][data-column='${blinky.y}']`);
  inky.i = 0;
  inky.out = false;
  inky.tile.className = 'empty';
  inky.tile.innerHTML = '';  
  inky.tile.style.transform = 'none';
  inky.x = 14;
  inky.y = 11;
  inky.tile = document.querySelector(`div[data-row='${inky.x}'][data-column='${inky.y}']`);
  pinky.i = 0;
  pinky.out = false;
  pinky.tile.className = 'empty';
  pinky.tile.innerHTML = '';
  pinky.tile.style.transform = 'none';
  pinky.x = 14;
  pinky.y = 13;
  pinky.tile = document.querySelector(`div[data-row='${pinky.x}'][data-column='${pinky.y}']`);
  clyde.i = 0;
  clyde.out = false;
  clyde.tile.className = 'empty';
  clyde.tile.innerHTML = '';
  clyde.tile.style.transform = 'none';
  clyde.x = 14;
  clyde.y = 15;
  clyde.tile = document.querySelector(`div[data-row='${clyde.x}'][data-column='${clyde.y}']`);
  //lives and gameover
  if(levelUp){
    lives ++;
    level ++;
  } 
  else {
    lives --;
  }
  livesNode.innerHTML = lives;
  if (lives === 0){
    let highScore = parseInt(localStorage.getItem("highScore"));
    if (!highScore || score >= highScore){
      highScoreNode.innerHTML = score;
      localStorage.setItem('highScore', score);
    }
    game = false;
    gameOnNodes.style.display = 'none';
    gameoverNodes.style.display = 'flex';
  }
  //resets positions
  if(game){
    if(levelUp){
      levelUp = false;
      board = initialBoard;
    }
    initBoard(board);
  }
}

numerote();
initBoard(initialBoard);
livesNode.innerHTML = lives;

class Character {
  constructor(name,tile,x,y) {
    this.name = name;
    this.tile = tile;
    this.x = x;
    this.y = y;
    this.i = 0;
  }

  testNextTile(){
    switch (this.direction){
      case 'right':
        if (this.y+1 <= gridWidth && board[this.x][this.y+1] !== 1){
          this.y += 1;
          this.test = true;
        }
        else {
          this.test = false;
        }
        break;
      case 'left':
        if (this.y-1 >= 0 && board[this.x][this.y-1] !== 1){
          this.y -= 1;
          this.test = true;
        }
        else {
          this.test = false;
        }
        break;
      case 'down':
        if(this.x+1 <= gridHeight && board[this.x+1][this.y] !== 1){
          this.x += 1;
          this.test = true;
        }
        else {
          this.test = false;
        }
        break;
      case 'up':
        if(this.x-1 >= 0 && board[this.x-1][this.y] !== 1){
          this.x -= 1;
          this.test = true;
        }
        else {
          this.test = false;
        }
        break;
    }
  }

  animate(){
    if(this.i<100){
      if(this.i===0 && this.name === 'pacman'){
        if (this.nextDirection !== this.direction){
          this.testNextDirection();
          if(this.turnTest){
            this.turn();
            this.direction = this.nextDirection;
          }
        }
        this.testNextTile();
        if(!this.test){
          this.tile.style.transform = 'none';
          this.stopped  = true;
          return;
        }
      }
      else if(this.i===0 && this.name !== 'pacman'){
        this.tile.style.transform = 'none';
        this.testDirections();
      }
      switch (this.direction){
        case 'right':
          this.tile.style.transform = `translateX(${this.i}%)`;
          break;
        case 'left':
          this.tile.style.transform = `translateX(-${this.i}%)`;
          break;
        case 'down':
          this.tile.style.transform = `translateY(${this.i}%)`;
          break;
        case 'up':
          this.tile.style.transform = `translateY(-${this.i}%)`;
          break;
      }
      this.i += 10;
      cancelAnimationFrame(this.animation);
      this.animation = requestAnimationFrame(() => this
      .animate());
    }
    else{
      this.i=0;
      if(this.test){
        cancelAnimationFrame(this.animation);
        this.move();
      }
    }
  }
}

class Pacman extends Character {
  constructor(name,tile,x,y){
    super(name,tile,x,y);
    this.i = 0;
    this.direction ='right';
    this.nextDirection = undefined;
    this.stopped = false;
    this.test = true;
    this.turnTest = false;
    this.animation;
    this.numberEaten = 1;
  }

  turn(){
    this.stopped = false;
    this.tile.classList.remove(`pacman-${this.direction}`);
    this.tile.classList.add(`pacman-${this.nextDirection}`);
    this.direction = this.nextDirection;
  }

  move(){
    this.stopped = false;
    this.tile.style.transform = 'none';
    this.tile.classList.remove(this.name);
    this.tile.classList.remove(`pacman-${this.direction}`);
    this.tile = document.querySelector(`div[data-row='${this.x}'][data-column='${this.y}']`);
    this.tile.classList.add(this.name);
    this.tile.classList.add(`pacman-${this.direction}`);
    //Handles score count
    
    if (this.tile.classList.contains('ghost')){
      if(ghostmode){
        console.log('eaten');
        let ghostName;
        if (pacman.x === blinky.x && pacman.y === blinky.y){
          ghostName = 'blinky';
        }
        else if (pacman.x === pinky.x && pacman.y === pinky.y){
          ghostName = 'pinky';
        }
        else if (pacman.x === inky.x && pacman.y === inky.y){
          ghostName = 'inky';
        }
        else if (pacman.x === clyde.x && pacman.y === clyde.y){
          ghostName = 'clyde';
        }
        console.log(ghostName);
        console.log(`pacman : ${pacman.x} ; ${pacman.y}`);
        console.log(`blinky : ${blinky.x} ; ${blinky.y}`);
        console.log(`pinky : ${pinky.x} ; ${pinky.y}`);
        console.log(`inky : ${inky.x} ; ${inky.y}`);
        console.log(`clyde : ${clyde.x} ; ${clyde.y}`);
        this.numberEaten ++;
        score += 200 * this.numberEaten;
      }
      else{ 
        console.log('death');
        resetPositions();  
        return; 
      }
    }
    else if (this.tile.classList.contains('big-dot')){
      this.tile.classList.remove('big-dot');
      this.tile.classList.remove('dot');
      ghost();
      score += 50;
      if (score >= level*2610){
        if(!document.querySelector('.dot')){
          levelUp = true;
          resetPositions();  
          return; 
        }
      }
      board[this.x][this.y] = 6;
      scoreNode.innerHTML = score;
    }else if (this.tile.classList.contains('dot')){
      this.tile.classList.remove('dot');
      score += 10;
      board[this.x][this.y] = 6;
      if (score >= level*2610){
        if(!document.querySelector('.dot')){
          levelUp = true;
          resetPositions();  
          return; 
        }
      }
      scoreNode.innerHTML = score;
    }
    this.animation = requestAnimationFrame(() => this.animate());
  }

  testNextDirection(){
    switch (this.nextDirection){
      case 'right':
        if (this.y+1 <= gridWidth && board[this.x][this.y+1] !== 1){
          this.turnTest = true;
        }
        else {
          this.turnTest = false;
        }
        break;
      case 'left':
        if (this.y-1 >= 0 && board[this.x][this.y-1] !== 1){
          this.turnTest = true;
        }
        else {
          this.turnTest = false;
        }
        break;
      case 'down':
        if(this.x+1 <= gridHeight && board[this.x+1][this.y] !== 1){
          this.turnTest = true;
        }
        else {
          this.turnTest = false;
        }
        break;
      case 'up':
        if(this.x-1 >= 0 && board[this.x-1][this.y] !== 1){
          this.turnTest = true;
        }
        else {
          this.turnTest = false;
        }
        break;
    }
  }
}

class Ghost extends Character {
  constructor(name,tile,x,y,out){
    super(name,tile,x,y);
    this.out = out;
    this.i = 0;
    this.direction = 'right';
    this.possibleDirections;
    this.test = true;
    this.animation;
    this.interval;
    this.offTimeout;
    this.blinkTimeout;
  }
  getRandomDirection(){
    let randomNumber = Math.floor(Math.random() * (this.possibleDirections.length))+1;
    let randomDirection = this.possibleDirections[randomNumber-1];
    switch (randomDirection){
      case 1 :
        this.direction = 'right';
        this.y+=1;
        break;
      case 2 :
        this.direction = 'left';
        this.y-=1;
        break;
      case 3 :
        this.direction = 'down';
        this.x+=1;
        break;
      case 4 :
        this.direction = 'up';
        this.x-=1;
        break;
    }
  }

  move(){
    this.tile.style.transform = 'none';
    this.tile.classList.remove(this.name);
    this.tile.classList.remove('ghost');
    let node = this.tile.querySelector(`#${this.name}`);
    if(node){
      this.tile.removeChild(node);
    }
    this.tile = document.querySelector(`div[data-row='${this.x}'][data-column='${this.y}']`);
    if (this.tile.classList.contains('pacman')){
      if (ghostmode){
        console.log('eatenGhost');
        console.log(this.name);
        this.numberEaten ++;
        score += 200 * pacman.numberEaten;
      }
      else{
        console.log('death ghost');
        resetPositions();
        return;    
      }
    }
    this.tile.classList.add(this.name);
    this.tile.classList.add('ghost');
    if(node){
      this.tile.appendChild(node);
    }  
    cancelAnimationFrame(this.animation);
    if(this.out){
      this.animation = requestAnimationFrame(() => this.animate());
    }
  }

  outOfBase(){
    let difference = 13 - this.y;
    //move to central tile of base(14,13);
    if (difference > 0){
      this.direction = 'right';
      this.animation = requestAnimationFrame(() => this.outOfBaseAnimate());
    }
    else if (difference < 0){
      this.direction = 'left';
      this.animation = requestAnimationFrame(() => this.outOfBaseAnimate());
    }
    else if (difference === 0){
      this.direction = 'up';
      this.animation = requestAnimationFrame(()  => this.outOfBaseAnimate());
    }
  }

  outOfBaseAnimate(){
    this.i+=10
    switch (this.direction){
      case 'right':
        this.tile.style.transform = `translateX(${this.i}%)`;
        break;
      case 'left':
        this.tile.style.transform = `translateX(-${this.i}%)`;
        break;
      case 'up':
        this.tile.style.transform = `translateY(-${this.i}%)`;
        break;
    }
    if (this.direction !== 'up' && this.i > 190){
      this.y = 13;
      this.i = 0;
      this.direction = 'up';
      this.move();
    }
    else if(this.i===300){
      this.x = 11;
      this.y = 13;
      this.i = 0;
      this.out = true;
      this.move();
    }
    this.animation = requestAnimationFrame(() => this.outOfBaseAnimate());
  }
  
  modeGhostOn(){
    clearInterval(this.interval);
    clearTimeout(this.offTimeout);
    clearTimeout(this.blinkTimeout);
    let img = document.createElement('img');
    img.id = this.name;
    img.src = "assets/img/ghost.png";
    this.tile.innerHTML = '';
    this.tile.appendChild(img);
    ghostmode = true;
    if(!ghostmode){
      this.i = 0;
    switch(this.direction){
      case 'right':
        this.direction = 'left';
        this.y-=1;
        break;
      case 'left':
        this.direction = 'right';
        this.y+=1;
        break;
      case 'up':
        this.direction = 'down';
        this.x+=1
        break;
      case 'down':
        this.direction = 'up';
        this.x-=1;
        break;
      }
    }
    this.blinkTimeout = setTimeout(()=> {
      this.interval = setInterval(() => {
        this.tile.firstElementChild.classList.toggle('blink');
      }, 500)
    },4000);
    this.offTimeout = setTimeout(()=> {
      this.modeGhostOff();
    }, 7000);
  }

  modeGhostOff(){
    pacman.numberEaten = 1;
    clearInterval(this.interval);
    let img = document.createElement('img');
    img.id = this.name;
    img.src = `assets/img/${this.name}.png`;
    this.tile.innerHTML = '';
    this.tile.appendChild(img);
    ghostmode = false;
  }
  testDirections(){
    let possibleDirectionsArray = [];
    if(this.y+1 <= gridWidth && board[this.x][this.y+1] !== 1 && this.direction !== 'left'){  //test for direction is to avoid the ghosts turning around
      possibleDirectionsArray.push(1);
    }
    if(this.y-1 >= 0 && board[this.x][this.y-1] !== 1 && this.direction !== 'right'){
      possibleDirectionsArray.push(2);
    }
    if(this.x+1 <= gridHeight && board[this.x+1][this.y] !== 1 && this.direction !== 'up'){
      possibleDirectionsArray.push(3);
    }
    if(this.x-1 >= 0 && board[this.x-1][this.y] !== 1 && this.direction !== 'down'){
      possibleDirectionsArray.push(4);
    }
    this.possibleDirections = possibleDirectionsArray;
    this.getRandomDirection();
  }
}

//OBJECTS
function initCharacters () {
  pacman = new Pacman('pacman',document.querySelector('.pacman'),23,14);
  blinky = new Ghost('blinky',document.querySelector('.blinky'),11,13, true);
  pinky =  new  Ghost('pinky',document.querySelector('.pinky'),14,13, false);
  inky = new Ghost('inky',document.querySelector('.inky'),14,11, false);
  clyde = new Ghost('clyde',document.querySelector('.clyde'),14,15, false);
}


function startMoving(){
    pacman.move();
    blinky.move();
    timeoutPinky = setTimeout(() => pinky.outOfBase(), 1000);
    timeoutInky = setTimeout(() => inky.outOfBase(), 8000);
    timeoutClyde = setTimeout(() => clyde.outOfBase(), 15000);
    reset = false;
}

function keydownHandler(e){
  e.preventDefault();
  if (game){
    if (reset){
      startMoving();
    }
    else{
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
        let input = e.key.substring(5).toLowerCase();
        if(!pacman.stopped){
          pacman.nextDirection = input;
        }
        else if (input !== pacman.direction && pacman.stopped){
          pacman.nextDirection = input;
          pacman.turn();
          pacman.animate();
        }
      }
    }
  }
  else {
    if (e.keyCode === 32){
      initBoard(initialBoard);
      score = 0;
      lives = 3;
      game = true;
      scoreNode.innerHTML = score;
      livesNode.innerHTML = lives;
      gameOnNodes.style.display = 'flex';
      gameoverNodes.style.display = 'none';
    }
  }
}

function ghost(){
  blinky.modeGhostOn();
  inky.modeGhostOn();
  pinky.modeGhostOn();
  clyde.modeGhostOn();
}

document.addEventListener('keydown', keydownHandler);
initCharacters();
let highScore = parseInt(localStorage.getItem("highScore"));
if (highScore){
  highScoreNode.innerHTML = highScore;
}