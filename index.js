import { currentTime } from "./js/currentTime.js"
import { start } from "./js/start.js"
import { restart } from "./js/restart.js"

const startBtn = document.getElementById('start-btn')
const restartBtn = document.getElementById('restart-btn')

currentTime()
startBtn.addEventListener('click', start)
restartBtn.addEventListener('click', restart)
