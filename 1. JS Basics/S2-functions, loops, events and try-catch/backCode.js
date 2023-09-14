// Part 4 ------------------------------------------------------------------------------------------------------------
// Work with functions;

function getNumbers() {
    var number1 = parseInt(prompt("Enter first number: "));
    var number2 = eval(prompt("Enter second number: "));
    var operator = prompt("Enter wanterd operator: ");
    alert(calculator(number1, number2, operator));

    /*
        Differents between parseInt and eval ...
        With parseInt we can enter a string as input (it saves inputs as NaN (not a number));
        But with eval we cannot enter a string as input (in this state we get an error and program will be stop!);
    */
}

function calculator(n1, n2, op) {
    switch(op) {
        case "+":
            return n1 + n2;
            break;
        case "-":
            return n1 - n2;
            break;
        case "*":
            return n1 * n2; 
            break;
        case "/":
            return n1 / n2;
            break;
        case "^":
            return n1 ** n2;
            break;
        default:
            return "Wrong input (operator)";
    }
}



// Part 5 ------------------------------------------------------------------------------------------------------------
// The loops;

function printNumbers() {
    // For loop;
    min = prompt("Enrer minimum: ");
    max = prompt("Enrer maximum: ");
    for (var index = min; index <= max; index++) {
        document.write(index + "<br />");
    }
    
    // While loop;
    var sum = 0, number = "";
    while (true) {
        number = prompt("Enter a number (enter * to finish): ");
        if (number == "*")
            break;
        if (number == NaN)
            continue;
        sum += Number(number);
    }
    document.writeln("summation is: ", sum); 

    // Do-while loop;
    var i = 1;
    do {
        alert(i);
        i++;
    } while (i < 5);

    // For-each loop;
    var text = "";
    var student = {name: "Mahdi", nickName: "theMHD", stdNo: 40030490};
    for (var x in student)
        text += student[x] += "-";  // it gets x as an string;
    document.write("<br>", text);   // <br> --> break-line tag;
}



// Part 6 ------------------------------------------------------------------------------------------------------------
// Events;

function txt1_focus() {
    alert("textbox1 focused!");
}

function txt2_unfocus() {
    alert("textbox2 unfocused (blured)!");
}

function txt2_mouseover(self) {
    self.value = "textbox2 mouseovered;";
    //  Here, self(this) is document.getElementById("txt2_box");
}

function txt2_mouseout(self) {
    self.value = "";
    //  Here, self(this) is document.getElementById("txt2_box");
}

function txt3_keyup(e) {
    /*
        alert(e.keyCode);  
        keyCode is like ascii code; 
    */
    var counter_text = document.getElementById("counter").innerHTML;

    //  Note: keyCode = 8 is keycode of <back space> and keyCode = 13 is keycode of <enter>; 
    if (e.keyCode != 8 && e.keyCode != 13)  
        document.getElementById("counter").innerHTML = Number(counter_text) + 1;
    else if (Number(document.getElementById("counter").innerHTML) != 0 && e.keyCode == 8)
        document.getElementById("counter").innerHTML = Number(counter_text) - 1;
    else if (e.keyCode == 13)
        document.getElementById("txt2_box").focus();
    //  With click enter (keyCode = 13), textbox 2 is focused; 
}

function txt3_keydown(e) {
    /* 
        Note: 
            onkeyup() works after entering a character ... 
            And onkeydown() attribute works before entering a character; 
    */

    if (e.keyCode == 56)
        e.preventDefault();  // it prevents the default action (entering);
    //  In this function we want to prevent entering if << *(star) >> character entered (ascii code of << * >> is 56);
}

function submit_data() {
    alert("We can use onsubmit attribute and its own function to validate data before sending to the server;");
    alert("Attention: onsubmit attribute is only exist for <form> tag;")
}



// Part 7 ------------------------------------------------------------------------------------------------------------
// Try-catch;

function trycatch() {
    try {
        alertt("System is worked correctly;");
    } catch (error) {
        alert("System is not worked!\nServer error: " + error.message);  
        //  error.message --> shows syntax, runtime or another errors ...
    }
}



// The end of JS Basics part -----------------------------------------------------------------------------------------