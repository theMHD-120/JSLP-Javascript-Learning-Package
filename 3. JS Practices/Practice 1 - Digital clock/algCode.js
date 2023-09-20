
var currTime = null;
function digiClock() {
    currTime = setInterval(function() {Timer();}, 1000);
}

function Timer() {
    var currDate = new Date();
    var time = currDate.toLocaleTimeString();
    document.getElementById("Clock").innerHTML = time;
}