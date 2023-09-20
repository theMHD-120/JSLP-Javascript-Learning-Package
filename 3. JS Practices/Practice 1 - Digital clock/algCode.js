/*
    ||| In the name of ALLAH |||
    JSLP - javascript learning package
    Author: seyed mahdi mahdavi mortazavi (theMHD)

    ------------------- << Practice 1 >> -------------------
    Designing a digital clock using the JavaScript objects;
    Used objects: 
        - Date
        - setInterval (one of inner window objects)
*/

var currTime = null;
function digiClock() {
    currTime = setInterval(function() {Timer();}, 1000);
}

function Timer() {
    var currDate = new Date();
    var time = currDate.toLocaleTimeString();
    document.getElementById("Clock").innerHTML = time;
}