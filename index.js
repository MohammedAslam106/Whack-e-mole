const squares=document.querySelectorAll(".select")
const mole=document.querySelector(".mole")
const timeLeft=document.querySelector("#time-left")
const score=document.querySelector("#score")

let result=0

let hitPosition=null

let currentTime=60

let timerId=null



function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove("mole")
    })
    const randomSqr=squares[Math.floor(Math.random()*9)]
    randomSqr.classList.add("mole")

    hitPosition=randomSqr.id
}

squares.forEach(square=>{
    square.addEventListener("mousedown",()=>{
        if (square.id==hitPosition){
            result++
            console.log(result)
            score.textContent=result
            hitPosition=null
        }
    })
})

function moveMole(){
    
    timerId=setInterval(randomSquare,500)
}

moveMole()


function countDown(){
    currentTime--
    timeLeft.textContent=currentTime

    if (currentTime==0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("Game over!")
        
    }
}


let countDownTimerId=setInterval(countDown,1000)