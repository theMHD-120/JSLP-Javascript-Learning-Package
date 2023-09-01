// Part 1 --------------------------------------------------------------------------------------
// Document type and define variable

document.getElementById("MHD").innerHTML = "I'm the MHD";

function changeText() {
    /*
        changeText() function for two elements of HTML file;
        (for two <p> tags of index.html file with different ids);
    */

    var zoomgAddress = "See <a href = 'https://www.zoomg.ir/'> zoomg site </a>";
    var gaemfaAddress = "See <a href = 'https://gamefa.com/'> gamefa site </a>";

    document.getElementById("zoomg").innerHTML = zoomgAddress;
    document.getElementById("gamefa").innerHTML = gaemfaAddress;
}



// Part 2 --------------------------------------------------------------------------------------
// Data types and operators;

// String types ('' or "" --> no difference)
var str1 = "salaam";
var str2 = "salaam 'khoobi' ?";
var str3 = 'salaam "khoobi" ?';
var str4 = "salaam \"khoobi\" ?";
var str4 = 'salaam \'khoobi\' ?';

// Number types
var num1 = 2;
var num2 = 2.56;
var num3 = 12e4;    // 12 * 10 ^ 4 = 120000;
var num4 = 12e-4;   // 12 * 10 ^ -4 = 0.0012;

// Boolean types
var x = true;
var y = false;

// Array types
var arr = new Array(); 
arr[0] = "theMHD";
arr[1] = 2.21;
arr[3] = 210124; // now index 2 is <1 empty item>;
var arr2 = new Array("theMHD", 2.21, 22145); // , , is not alowed;
var arr3 = ["theMHD", 2.21, , 22145]; // now index 2 is <1 empty item>;

// Object type (like python dictionary)
var student1 = {name: "mahdi", family: "mahdavi", student_number: 40030490};
var student2 = {name: "mazyar", family: "daryaei", student_number: 40030500};
var student3 = {name: "mohsen", family: "razavi zadegan", student_number: 40030489};
var students = [student1, student2, student3];  
    // for example: students[1].name == mazyar or students[2]["student_number"] = 40030489;

// Alert type (while loading the website page)
alert("Warning: YOU ARE HACKED BY theMHD!");
alert(students[0].name + " says");

// Null type
var n = null;

// Operators
// +, -, *, /, **(power), %(integer remaider);
// n++, ++n, n--, --n, =(assign), +=, -=, /=, *=, %=, <<(shift left), >>(shift right);
var string1 = "Hello";
var string2 = "How are you?";
var srting3 = str1 + " " + str2; // string3 = "Hello How are you?";
var string4 = "4" + "12";        // string4 = 412 (a string);
var number1 = 10 * "5" + 2;      // number1 = 52 (a number);
var string5 = 10 * "5" + "2";    // string5 = 502 (a string);

k = 20;
var t = k > 30? "Yes" : "No";   // t = "No";



// Part 3 --------------------------------------------------------------------------------------
// Conditional operators;

var x = prompt("Enter a number (as x): ");  
// prompt gets a string as input! so x is a string but we can use it as a number!!! WTF:|

// If conditions ...
if (!(x % 2)) {
    alert("The entered number is Even!");
}
else
    alert("The entered number is Odd!");

y = "20";
if (y == "20")
    alert("Yes! count of y is equal with count of '20';");

if (y === "20")
    alert("Yes! count and type of y is equal with '20'; \nBoth of them are string;");

if (x >= 10 && x <= 99)  // logic &&(and), ||(or);
    alert("The entered number has 2 digits;");
else if (x >= 100 && x <= 999)
    alert("The entered number has 3 digits;");

if (x > "20")
    alert("Yes it works :));\nComparing a number with a string (with count of them);");

/* Swich case ...
switch(x) {
    case ...:
        somthing to do;
        break;
    case ...:
        somthing to do;
        break;
    default:
        somthing to do;
}
*/