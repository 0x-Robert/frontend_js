const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const messageDisplay = document.querySelector('#message');

//변하지 않는 변수는 대문자로 컨벤션?을 사용함 
const GAME_TIME = 5;
const API_URL = "https://random-word-api.herokuapp.com/word?number=100";


let words = ["banana","key","car","javascript","scalper"];
let score = 0;
let time = 0;
let timeInterval; 
let isPlaying = false; 
let isReady = false;

time = GAME_TIME;


init()
// function init(){
//     //한 줄일 경우 중괄호와 return을 생략할 수 있음 
//     const res = fetch(API_URL).then((res)=> res.json()).then((data) => words = data );
// }

//async await (비동기함수) : callback과 promise의 단점을 보완하기 위해 추가됨
async function init(){
    const res = await fetch(API_URL);
    const data = await res.json();
    let words = data.filter(item =>item.length < 7)
    isReady = true;
    console.log(words);
}

wordInput.addEventListener("input", e=>{
    const typedText = e.target.value 
    const currentText = currentWord.innerText;
    if (typedText.toUpperCase() === currentText.toUpperCase() && isReady ){
        addScore()
        setNewWord()
    }
})

//게임종료
function gameover(){
    console.log("game over");
    isPlaying = false;

    clearInterval(timeInterval);
    timeInterval = null;
    messageDisplay.innerText = "GAME OVER";
    score = 0;
}

//시간 카운트 다운
function countDown(){
    console.log(time);
    time = time - 1; 
    timeDisplay.innerText = time; 
    if(time === 0){
        gameover();
    }
}

function setNewWord(){
    time = GAME_TIME;
    wordInput.value = "";
    messageDisplay.innerText = "Now Playing!!!";
    const randomIndex = Math.floor(Math.random() * words.length );
    currentWord.innerText = words[randomIndex];

    if (!isPlaying){
        timeInterval = setInterval(countDown, 1000);
        isPlaying = true; 
    }
    
}

function addScore(){
    score = score + 1;
    scoreDisplay.innerText = score;
}