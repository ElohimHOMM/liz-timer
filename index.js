let goal = new Date(Date.parse("2025-07-22T20:58:00.00"));
console.log(goal)
let goal_string = convertToDisplay(goal);
const goal_display = document.querySelector('#goal');
const timer_display = document.querySelector('#safeTimerDisplay');

window.onload = function () {
    goal_display.innerHTML = "This is when we will finally see each other: " + goal_string;
    var time = (goal - new Date(Date.now())) / 1000
    startTimer(time, timer_display);
};

function startTimer(duration, display) {
    let timer = duration, days, hours, minutes, seconds;
    setInterval(function () {
        days = parseInt(timer / 24 / 60 / 60, 10);
        hours = parseInt((timer / 60 / 60) % 24, 10);
        minutes = parseInt((timer / 60) % 60, 10);
        seconds = parseInt(timer % 60, 10);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = days + ":" + hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}

function convertToDisplay(date) {
    var output_string = toDoubleDigits(date.getDate())
    output_string += ".";
    output_string += toDoubleDigits(date.getMonth() + 1)
    output_string += ".";
    output_string += date.getFullYear();
    output_string += " - ";
    output_string += toDoubleDigits(date.getHours())
    output_string += ":";
    output_string += toDoubleDigits(date.getMinutes())
    output_string += ":";
    output_string += toDoubleDigits(date.getSeconds())
    return output_string;
}

function toDoubleDigits(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}
