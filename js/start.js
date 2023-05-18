export {start, HH, mm, s, timer, countSec} 
import { startBtn, pauseBtn, continueBtn, restartBtn } from "../index.js"

let HH = document.getElementById('HH')
let mm = document.getElementById('mm')
let s = document.getElementById('s')
let timer

function start (){  
 countSec()
 startBtn.disabled = 'true'
 pauseBtn.disabled = ''
 restartBtn.disabled = ''
}

function countSec(){
  let sec = Number(s.innerText)+1
  
  if(sec == 60){
    s.innerText = `00`
    countMin()
  }else if(sec < 10){
    s.innerText = `0${sec}`
  }else{
    s.innerText = `${sec}`
  }
  timer = setTimeout(countSec, 1000)
}

function countMin(){
  let min = Number(mm.innerText)+1
  if(min == 60){
    mm.innerText = `00`
    countHour()
  }else if(min < 10){
    mm.innerHTML = `0${min}`
  }else{
    mm.innerText = `${min}`
  }
}

function countHour(){
  let hour = Number(HH.innerText)+1
  if(hour == 24){
    HH.innerText = `00`
  }else if(hour < 10){
    HH.innerHTML = `0${hour}`
  }else{
    HH.innerText = `${hour}`
  }
}