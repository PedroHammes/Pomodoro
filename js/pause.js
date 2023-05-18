import { pauseBtn, continueBtn } from "../index.js"
import { timer } from "./start.js"
export { pause }


function pause(){
  clearTimeout(timer)
  pauseBtn.disabled = 'true'
  continueBtn.disabled = ''
}