// Set the launch date (YYYY, MM (zero-based), DD, HH, MM, SS)
const launchDate = new Date(2024, 3, 1, 12, 0, 0);

function updateTimer() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days + "d";
    document.getElementById("hours").innerText = hours + "h";
    document.getElementById("minutes").innerText = minutes + "m";
    document.getElementById("seconds").innerText = seconds + "s";

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "<h2>Launched!</h2>";
    }
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);
