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
const gridWidth = 27;
const gridHeight = 30;
const scoreNode =  document.querySelector(".score__number");
let score = 0;

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

numerote();
initBoard();

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
    if (this.tile.classList.contains('big-dot')){
      this.tile.classList.remove('big-dot');
      this.tile.classList.remove('dot');
      score += 50;
      scoreNode.innerHTML = score;
    }else if (this.tile.classList.contains('dot')){
      this.tile.classList.remove('dot');
      score += 10;
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

let pacman = new Pacman('pacman',document.querySelector('.pacman'),23,14);
let blinky = new Character('red', document.querySelector('.red'),11,13);

function keydownHandler(e){
  e.preventDefault();
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
    let input = e.key.substring(5).toLowerCase();
    if (input !== pacman.direction){
      if(!pacman.stopped){
       console.log('on sarrete pas nous');
       pacman.nextDirection = input;
      }
      else if(pacman.stopped){
        pacman.nextDirection = input;
        pacman.turn();
        pacman.animate();
      }
    }
  }
}

document.addEventListener('keydown', keydownHandler);
pacman.move();