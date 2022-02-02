let inputM
let inputDay
const inputYear = 2022
let runOrNot = 0
let interval

function inputFunc() {
    runOrNot++
    if (runOrNot > 1) {
        run()
    }
}
document.getElementById('inputMonth').addEventListener('keyup', event => {
    inputM = event.target.value
    inputFunc()
})

document.getElementById('inputday').addEventListener('keyup', e => {
    inputDay = e.target.value
    inputFunc()
})

function run() {
    clearInterval(interval)
    
    const countDownDate = new Date(`${inputM} ${inputDay}, ${inputYear}`).getTime()
    
    // Update the count down every 1 second
    interval = setInterval(function() {
    
        // Get today's date and time
        const now = new Date().getTime()
    
        // Find the distance between now and the count down date
        const distance = countDownDate - now
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            
        // Output the result
        document.getElementById("output").innerHTML = days + "d " + hours + "h "
        + minutes + "m "
            
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(interval)
            document.getElementById("output").innerHTML = "EXPIRED"
        }
    }, 1000)
}
