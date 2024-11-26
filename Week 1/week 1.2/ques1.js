//assignment 1 
// question 1 : create a counter in js that counts down from 30 to 0 
let countdown = 30; // Initialize countdown

let interval = setInterval(function() {
    console.log(countdown); // Print the current value of countdown
    countdown--; // Decrease the counter

    if (countdown < 0) {
        clearInterval(interval); // Stop the countdown when it reaches 0
    }
}, 1000); // 1000 milliseconds = 1 second


