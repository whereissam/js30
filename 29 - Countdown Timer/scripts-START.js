(function(){
const timecontrols = document.querySelectorAll('.timer__controls > button')
const timeLeft = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')


let timer
const startTimer = function(sec){
    console.log(sec)
    clearInterval(timer);
    const now = new Date().getTime();
    const end = now + sec *1000

    timer = setInterval(function(){
        const secLeft = Math.floor((end - Date.now()) / 1000)
        if(secLeft >= 0){
            const displayMin = Math.floor(secLeft / 60)
            let displaySec = secLeft % 60;
            displaySec = displaySec < 10 ? '0' + displaySec : displaySec
            timeLeft.innerText =  `${displayMin}:${displaySec}`
        }else{
            clearInterval(timer)
        }
    },16) // 1000/60

    const endDate = new Date(end)
    let hour = endDate.getHours();
    let min = endDate.getMinutes();
    min = min < 10 ? '0' + min : min
    endTime.innerText = `Back at ${hour}:${min}`
}

function timestart(){
   const sec = parseInt(this.dataset.time);
   startTimer(sec)
}

timecontrols.forEach(button => button.addEventListener('click', timestart))
document.querySelector('#custom').addEventListener('submit', function(e){
    e.preventDefault();
    const value = parseInt(this.minutes.value)
    if(value){
        startTimer(value * 60)
        this.reset()
    }
})
})()

// (function(){
// const button = document.querySelectorAll('.timer__controls > button')
// const timeLeft = document.querySelector('.display__time-left')
// const endTime = document.querySelector('.display__end-time')

// const timeHandler = function(){
//     console.log(this.dataset.time) 
// }

// button.forEach((but)=>{
//     but.addEventListener('click', timeHandler)
// })

// document.querySelector('#custom').addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(this.minutes.value * 60)
// })


// })()