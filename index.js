import { start } from "./js/start.js"
import { pause } from "./js/pause.js"
import { contin } from "./js/continue.js"
import { restart } from "./js/restart.js"

export {startBtn, pauseBtn, continueBtn, restartBtn}

const startBtn = document.getElementById('start-btn')
const pauseBtn = document.getElementById('pause-btn')
const continueBtn = document.getElementById('continue-btn')
const restartBtn = document.getElementById('restart-btn')

startBtn.addEventListener('click', start)
restartBtn.addEventListener('click', restart)
pauseBtn.addEventListener('click', pause)
continueBtn.addEventListener('click', contin)