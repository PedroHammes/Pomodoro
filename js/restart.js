import { HH, mm, s } from "./start.js";
export {restart}

function restart(){
  HH.innerText = `00`
  mm.innerText = `00`
  s.innerText = `00`
  console.log('Cronômetro resetado')
}