let object = {
    score:0
}
let score=object.score
function addScore(){


     score++;
    console.log(score);
}
document.querySelector("#heads").addEventListener("click",()=>{
    addScore();
})