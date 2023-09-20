/*
    ||| In the name of ALLAH |||
    JSLP - javascript learning package
    Author: seyed mahdi mahdavi mortazavi (theMHD)

    --------------------------- << Practice 1 >> ---------------------------
    Designing a digital clock using the JavaScript objects;
    Used objects: 
        - Date 
        - setInterval (one of inner window objects)

    In JSLP:
        Date: JS Advance / Section 4 - String and Date / Part 11;
        setInterval: JS Advance / Section 6 - Regex and Window / Part 15;
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