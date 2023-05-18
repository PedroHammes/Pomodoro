import { HH, mm, s, timer } from "./start.js";
export {restart}

function restart(){
  HH.innerText = `00`
  mm.innerText = `00`
  s.innerText = `00`
  clearTimeout(timer)
  console.log('Cronômetro resetado')
}