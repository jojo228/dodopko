const timerBox = document.getElementById('timer-box')
const courseDurationBox = document.getElementById('course-duration')

const countdownD = courseDurationBox.textContent


let hours = countdownD - 1
let minutes = 59
let seconds = 60
let displaySeconds
let displayMinutes
let displayHours

const timer = setInterval(()=>{
    seconds --
    if (seconds < 0) {
        seconds = 59
        minutes --
    }
    if (hours.toString().length < 2) {
        displayHours = '0'+hours
    } else {
        displayHours = hours
    }
    if (minutes.toString().length < 2) {
        displayMinutes = '0'+minutes
    } else {
        displayMinutes = minutes
    }
    if(seconds.toString().length < 2) {
        displaySeconds = '0' + seconds
    } else {
        displaySeconds = seconds
    }
    if (hours === 0 && minutes === 0 && seconds === 0) {
        timerBox.innerHTML = "<b>00:00:00</b>"
        setTimeout(()=>{
            clearInterval(timer)
            alert('Time over')
            sendData()
        }, 500)
    }

    timerBox.innerHTML = `<b>${displayHours}:${displayMinutes}:${displaySeconds}</b>`
}, 1000)

