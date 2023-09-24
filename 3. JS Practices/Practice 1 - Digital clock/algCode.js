/*
    ||| In the name of ALLAH |||
    JSLP - javascript learning package
    Author: seyed mahdi mahdavi mortazavi (theMHD)

    --------------------------- << Practice 1 >> ---------------------------
    Designing a digital clock using the JavaScript objects;
    Used objects: 
        - Date 
        - Document
        - setInterval
        - clearInterval

    In JSLP:
        Document: JS Advance / Section 3 - DOM tree / Part 8;
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

function toggleStyle(state) {
    if(!state) {
        document.getElementById("space").style =  "box-shadow: none; transform: scale(0.97, 0.97);"
        document.getElementById("clock").style = "text-shadow: none; color: rgb(138, 0, 60, 0.6);"
        document.getElementById("toggle").style = "box-shadow: inset rgba(0, 0, 0, 0.4) 0px 10px 50px;";
        document.body.style = "background: linear-gradient(90deg, rgb(156, 1, 161) 0%, rgb(1, 138, 166) 50%, rgb(156, 1, 161) 100%);";
    }
    else {
        document.getElementById("clock").style = "color: rgb(161, 0, 70);";
        document.getElementById("space").style = "box-shadow: rgba(0, 0, 0, 0.6) 0px 30px 50px";
        document.getElementById("toggle").style = "box-shadow: inset rgba(0, 0, 0, 0.6) 0px 1px 5px;";
        document.body.style = "background: linear-gradient(90deg, rgb(186, 1, 192) 0%, rgba(0,212,255,1) 50%, rgb(186, 1, 192) 100%);";
    }
}

function toggleTimer() {
    if (document.getElementById("toggle").value == "Pause") {
        toggleStyle(false);
        timeFlag = false;
        document.getElementById("toggle").value = "Play";
    }
    else {
        toggleStyle(true);
        timeFlag = true;
        document.getElementById("toggle").value = "Pause";
    }

    digiClock();
}