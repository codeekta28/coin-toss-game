// put toss image according to the coinArray selection in image div

console.log("This is index file");
let coinTossData = {
    'you': { 'yourSelection': '#player-selection', 'yourScore': '#player-score', 'score': 0, },
    'computer': { 'computerSelection': '#computer-selection', 'computerScore': '#computer-score', 'score': 0, },
}
let coinArray = ['Heads', 'Tails'];
let tossSound = new Audio('toss.mp3');
let winSound = new Audio('win.mp3');
let looseSound = new Audio('loose.mp3');
let headEnable = false;
let tailEnable = false;
let you = coinTossData.you;
let computer = coinTossData.computer;
let yourResultScore = you.score;
let computerResultScore = computer.score;
let draw = 0;
document.querySelector("#heads").addEventListener("click", head);
document.querySelector("#tails").addEventListener("click", tail);
function head() {
    document.querySelector("#image").classList.add("animate");
    setTimeout(() => {
        document.querySelector("#image").classList.remove("animate");
    }, 1000);
    let yourValue = 'Heads'
    tossSound.play();
    document.querySelector(you.yourSelection).innerHTML = yourValue;
    let computerValue = computerIsMakingSelection()
    coinTossing(yourValue, computerValue);

}
function tail() {

    tossSound.play();
    let yourValue = 'Tails'
    document.querySelector(you.yourSelection).innerHTML = yourValue;
    let computerValue = computerIsMakingSelection()
    document.querySelector("#image").classList.add("animate");
    setTimeout(() => {
        document.querySelector("#image").classList.remove("animate");
    }, 1000);
    coinTossing(yourValue, computerValue);
}
function computerIsMakingSelection() {
    let index = Math.floor(Math.random() * coinArray.length)
    document.querySelector(computer.computerSelection).innerHTML = coinArray[index];
    return coinArray[index];
}
function coinTossing(yourValue, computerValue) {
    let index = Math.floor(Math.random() * coinArray.length)
    let tossvalue = coinArray[index];
    setTimeout(() => {
        tossImage(tossvalue);  
    }, 1000);
   setTimeout(() => {
    scoreCalculation(tossvalue,yourValue,computerValue) 
   }, 1500);


}
function scoreCalculation(tossvalue,yourValue,computerValue){
    if (tossvalue === yourValue && tossvalue !== computerValue) {
        yourResultScore++
        document.querySelector(you.yourScore).innerHTML = yourResultScore;
        if (yourResultScore === 5) {
            console.log(yourResultScore)
            console.log("you won")
            showResult("You Won");
        }

    } else if (tossvalue === computerValue && tossvalue !== yourValue) {
        computerResultScore++;
        document.querySelector(computer.computerScore).innerHTML = computerResultScore;
        if (computerResultScore === 5) {
            console.log(yourResultScore)
            // console.log("computer won")
            showResult("computer won");
        }
    } else {
        // console.log("draw");
        draw++;
        document.querySelector('#draw-score').innerHTML = draw;
    }

}
function tossImage(tossValue){
    let container = document.querySelector("#image");
    if(tossValue=="Heads"){
        container.style.background=`url('head.png')`; 
    }else{
        container.style.background=`url('tails.png')`; 
    }
}
function showResult(msg) {
    if (msg === "You Won") {
        document.querySelector("#winner").style.backgroundColor = "blue"
        winSound.play()
    } else {
        document.querySelector("#winner").style.backgroundColor = "red"
        looseSound.play();
    }
    document.querySelector("#winner").innerHTML = msg;

    document.querySelector("#heads").disabled = true;
    document.querySelector("#tails").disabled = true;
    let playAgain = document.createElement("button");
    playAgain.className = "newGame btn";
    playAgain.innerHTML = `Play Again`;
    let container = document.querySelector(".canvas");
    container.append(playAgain);
    newGame()
}
function newGame() {
    document.querySelector(".newGame").addEventListener("click", (e) => {
        window.location.reload();
        console.log("hello");
    })
}
