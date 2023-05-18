export { start }

function start(){
  let minute = Number(document.getElementById('mm').innerText)
  minute++
  document.getElementById('mm').innerText = minute < 10 ? `0${minute}` : minute 

  console.log(minute)
}