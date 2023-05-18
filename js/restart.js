import { startBtn, pauseBtn, continueBtn, restartBtn } from "../index.js";
import { HH, mm, s, timer } from "./start.js";
export {restart}

function restart(){
  HH.innerText = `00`
  mm.innerText = `00`
  s.innerText = `00`
  clearTimeout(timer)
  startBtn.disabled = ''
  pauseBtn.disabled = 'true'
  continueBtn.disabled = 'true'
  restartBtn.disabled = 'true'
}