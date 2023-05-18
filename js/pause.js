export { pause }
import { timer } from "./start.js"


function pause(){
  console.log('pause')
  clearTimeout(timer)
}