import { continueBtn, pauseBtn } from "../index.js"
import { countSec } from "./start.js"
export {contin}

function contin (){
  countSec()
  continueBtn.disabled = 'true'
  pauseBtn.disabled = ''
}