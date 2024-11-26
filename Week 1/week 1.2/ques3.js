// question 3 : create a terminal clock (HH:MM:SS)

function displayClock() {
    setInterval(function() {
        // Get the current date and time
        let now = new Date();

        // Extract hours, minutes, and seconds
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // Format time as HH:MM:SS
        hours = hours < 10 ? '0' + hours : hours;  // Add leading 0 if necessary
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Clear the console before printing the new time
        console.clear();
        console.log(hours + ":" + minutes + ":" + seconds);
    }, 1000);  // Update every 1000 milliseconds (1 second)
}

// Start the terminal clock
displayClock();
