const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const start = document.getElementById('start');
const control = document.getElementById('control');
const levelsBox = document.getElementById('levels');
const levels = document.getElementsByClassName('level');
const gameOver = document.getElementById('gameOver');
const score = document.getElementById('score');
const scoreLive = document.getElementById('scoreLive')
const speed = 6;
const size = 5;
let x = canvas.width / 10;
let y = canvas.height / 10;
let dx = speed;
let dy = 0;
let snakeLenght = 1;
let snake = [{ x, y }];
let move = false;
let resset = false;
let scores = 0;
let times = 0;
let ok = false;


document.addEventListener('keydown', event => {

    if (event.keyCode === 38) {
        dx = 0;
        dy = -size;

    } else if (event.keyCode === 40) {
        dx = 0;
        dy = size;

    } else if (event.keyCode === 37) {
        dx = -speed;
        dy = 0;

    } else if (event.keyCode === 39) {
        dx = speed;
        dy = 0;

    }
});

for (let i = 0; i < levels.length; i++) {
   
    levels[i].addEventListener('click',()=>{

    times = levels[i].value;
    levelsBox.style.display= "none"; 
    ok = true;
});  

}


function generateFood() {

    return {
        x: Math.floor(Math.random() * (canvas.width / speed)) * speed,
        y: Math.floor(Math.random() * (canvas.height / size)) * size
    };
}

let food = generateFood();
    
const moveSnake = ()=> {

  if(!move){

    x += dx;
    y += dy;
 
  }
    

    if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) {

        return false;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, speed, size);

    if(!move){

       snake.unshift({ x, y });
    snake = snake.slice(0, snakeLenght);
     
      }
    


    ctx.fillStyle = 'yellow';

    snake.forEach(block => {
        ctx.fillRect(block.x, block.y, speed, size);
        if (block.x == block.y) {
            return false;
        }
    });

    if (x === food.x && y === food.y) {

        snakeLenght ++;
        scores ++;
        scoreLive.innerHTML = scores;
        food = generateFood();
       

    }

    return true;

}


start.addEventListener('click',()=>{
    
    if(ok){
    control.innerHTML = "<i class='fa fa-pause'></i>"; 

    
if(!resset){

  
    start.innerHTML = "<i class='fa fa-rotate-left'>";
    let intervalId = setInterval(() => {

    if (!moveSnake()) {
        start.innerHTML = "start";
        control.innerHTML = "<i class='fa fa-play'></i>";
        clearInterval(intervalId);
        resset = true;
        move = true;
        score.innerHTML = scores;
        gameOver.style.display="unset";
    }
    }, times / 2);

    resset = true;
    

}else{

   window.location.href = "snake.html"
}
}   

control.addEventListener('click',()=>{

    if(!move){
        
        move = true;
        control.innerHTML = "<i class='fa fa-play'></i>"
    }else{

        move = false;
        control.innerHTML = "<i class='fa fa-pause'></i>"
    }

})

});

   




