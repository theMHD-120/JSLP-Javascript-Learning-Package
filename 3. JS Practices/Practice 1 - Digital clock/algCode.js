/*
    ||| In the name of ALLAH |||
    JSLP - javascript learning package
    Author: seyed mahdi mahdavi mortazavi (theMHD)

    --------------------------- << Practice 1 >> ---------------------------
    Designing a digital clock using the JavaScript objects;
    Used objects: 
        - Date 
        - setInterval (one of inner window objects)
        - clearInterval (one of inner window objects)

    In JSLP:
        Date: JS Advance / Section 4 - String and Date / Part 11;
        setInterval and clearInterval: 
            JS Advance / Section 6 - Regex and Window / Part 15;
*/

var currTime = null;
var timeFlag = true;

function getCurrTime() {
    var currDate = new Date();
    var time = currDate.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;
}

function digiClock() {
    if (timeFlag == true)
        currTime = setInterval(function() {getCurrTime();}, 1000);
    else
        clearInterval(currTime);
}

function toggleTimer() {
    if (document.getElementById("toggle").value == "Pause") {
        document.getElementById("space").style = "box-shadow: none";
        document.getElementById("clock").style = "color: rgb(138, 0, 60, 0.6);"
        document.getElementById("toggle").style = "box-shadow: inset rgba(0, 0, 0, 0.6) 0px 10px 50px;";
        document.getElementById("toggle").value = "Play";
        timeFlag = false;
    }
    else {
        document.getElementById("clock").style = "color: rgb(161, 0, 70);";
        document.getElementById("space").style = "box-shadow: rgba(0, 0, 0, 0.6) 0px 30px 50px";
        document.getElementById("toggle").style = "box-shadow: inset rgba(0, 0, 0, 0.6) 0px 1px 5px;";
        document.getElementById("toggle").value = "Pause";
        timeFlag = true;
    }

    digiClock();
}