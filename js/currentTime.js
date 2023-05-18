export {currentTime}

const localHour = document.getElementById('local-hour')

function currentTime (){ 
  setInterval( function() {
    let hour = new Date().toLocaleTimeString()
    localHour.innerHTML = hour
}, 1000)
}