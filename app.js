let gameSeq = [];
let userSeq = [];
let buts= ["yellow","red","green","purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let startBtn = document.querySelector("button");
startBtn.addEventListener("click", ()=>{
    if(started == false){
        // console.log("game started");
        started = true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}
function userFlash(btn){
    btn.classList.add("Uflash");
    setTimeout(() => {
        btn.classList.remove("Uflash");
    }, 200);
}

function levelUp(){
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = buts[randIdx];
    let randBtn = document.getElementById(randColor);
    gameSeq.push(randBtn.id);
    // console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(){
    // console.log(`curr level is ${level}`);
    let idx = level - 1;
    if(userSeq[idx] ===  gameSeq[idx]){
       levelUp();
       
    }else{
        h2.innerText = "game over! press any key to restart game.";
        calScore();
        resetGame();
        
    }
}

function calScore(){
    let h3 = document.createElement("h3");
    h2.append(h3);
     h3.classList.add("h3");
    h3.innerText = `YOUR SCORE IS ${level}`;
}
function btnpress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(`color clicked is ${userColor}`);
    userSeq.push(userColor);
    // console.log(userSeq);

    checkAns();
}

    function resetGame() {
        gameSeq = [];
        userSeq = [];
        level = 0;
        started = false;
    }

let btns = document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click", btnpress);
}