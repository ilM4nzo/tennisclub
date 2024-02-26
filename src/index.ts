/* timer thingy */
// Set the date we're counting down to
var countDownDate = new Date("Mar 1, 2024 10:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
    var hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    var minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    var seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

    // Display the result in the element with id="demo"
    const countdown = document.getElementById("countdown");
    if (countdown) {
        countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            countdown.innerHTML = "ENJOY :D";
        }

        countdown.style.display = "block";
    }

}, 1000);