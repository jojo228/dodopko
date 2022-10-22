
const courseDate = document.getElementById('course-date')
const countdownBox = document.getElementById('countdown-box')


const countdownDate = Date.parse(courseDate.textContent)


setInterval(()=>{
    const now = new Date().getTime()

    const diff = countdownDate - now

    //const d = Math.floor(countdownDate / (1000 * 60 * 60 * 24) - (now / (1000 * 60 * 60 * 24)))
    const h = Math.floor((countdownDate / (1000 * 60 * 60) - (now / (1000 * 60 * 60))) % 24)
    const m = Math.floor((countdownDate / (1000 * 60) - (now / (1000 * 60))) % 60)
    const s = Math.floor((countdownDate / (1000) - (now / (1000))) % 60)

    if (diff > 0) {
        countdownBox.innerHTML = h + ":" + m + ":" + s
    } else {
        
    }
}, 1000)



