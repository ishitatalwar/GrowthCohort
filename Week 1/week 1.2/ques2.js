// question 2 : calculate the time it takes between a set timeout call 
// and the inner function actually running


let startTime = new Date().getTime();  // Or use Date.now()

// Set a timeout with a delay of 2000 milliseconds (2 seconds)
setTimeout(function() {
    // Get the current time when the function runs
    let endTime = new Date().getTime();  // Or use Date.now()

    // Calculate the time difference
    let timeDifference = endTime - startTime;

    console.log("Time difference between setTimeout call and execution: " + timeDifference + " milliseconds");
}, 2000);  // 2 seconds delay
