// Part 10 ------------------------------------------------------------------------------------------------------------
// JavaScript Objects - String;

function stringObject() {

    /*
    Learning about some String methods:
        1.  length, to get length of a string;
        2.  constructor, to get constructor of a string;
        3.  charAt, to get character of a string index;
        4.  charCodeAt, to get ascii code of above character; 
        5.  concat, to concatinate some (infinite) strings to a string;
        6.  indexOf, to get index of a character (or first index of a sub string) in a string;
        7.  lastIndexOf, like indexOf; But it starts checking from the last index to the beggining;
        8.  replace, to replace an existing character or substring with another characters or substrings;
        9.  search, just like indexOf :);
        10. slice, to get a substring from a string (from one index to another index);
        11. split, to split a string with an existing character (space, comma or ...);
        12. substring, to get a substring of a string between two indexes (the substr method has expired);
        13. toUpperCase, convert alphabetic characters to their uppercase letter;
        14. toLowerCase, convert alphabetic characters to their lowecase letter;

    Wrapper methods (they are used to make html tags with our string):
        ATTENTION: THESE METHODS ARE ALL EXPIRED !!!
        1.  anchor, to put a string in the <a>..</a> (anchor) tag and mark it;       
        2.  big, to put a string in the <big>..</big> tag;          
        3.  bold, to put a string in the <b>..</b> tag;                          
        4.  italics, to put a string in the <i>..</i> tag;                       
        5.  link, to make a link with a string (put string in the <a>..</a> tag);
        6.  small, to put a string in the <small>..</small> tag;  
        7.  strike, to put a string in the <strike>..</strike> tag; 
        8.  sub, to put a string in the <sub>..</sub> tag;
        9.  sup, to put a string in the <sup>..</sup> tag;
    */

    // String-object methods ---------------------------------------------------------------
    var txt1 = "Hi; How are you?";
    alert("The txt1 is:\n" + txt1);
    alert("Length of txt1 is:\n" + txt1.length);                                                    // #1;
    alert("The constructor of txt1 is:\n" + txt1.constructor);                                      // #2;
    alert("The 5th character (index 4) is:\n" + txt1.charAt(4));                                    // #3;
    alert("The ascii code of fifth charator (index 4) is:\n"                                        // #4;
        + txt1.charCodeAt(4));  


    var txt2 = "\nWhats up?";                                                                       // #5;
    alert(txt1.concat("\n-Thanks;", " I'm fine;", txt2));                            
    alert("Attention: txt1 not changed ...\n" + "Now, txt1 is:\n" + txt1);
    /*
        To change txt1, we should use assignment (see bottom):
        txt1 = txt1.concat("\n-Thanks;", " I'm fine;", txt2);
    */


    alert("<o> is in index:\n" + txt1.indexOf("o"));  // in <How>;                                   // #6;
    alert("With starting from index 10 (11th character), <o> is in the\n" 
        + txt1.indexOf("o", 10));  // in <you> (<o> is in index 13);
    /* 
        Note #1:
            If a character does not found in our string, indexOf returns <-1>;
            You can try these two examples:
                alert(txt1.indexOf("O"));  // <O> does not exist in txt1;
                alert("With starting from index 14 (15th character), <o> is in the\n" 
                    + txt1.indexOf("o", 14));  // returns <-1>;
        Note #2:
            Also, we can find the first index of a sub string;
            You can try these two examples:
                alert(txt1.indexOf("are"));  // returns <8>, index of first character --> <a>;
                alert(txt1.indexOf("aer"));  // <aer> doesn't exist in txt1; So it returns <-1>;
    */


    alert("From the last index, <o> is in index:\n" + txt1.lastIndexOf("o"));                        // #7;
    alert("From the first index (index 0) to the index 13 (14th character), <o> is in index:\n"
        + txt1.lastIndexOf("o", 13));
    alert("From the first index (index 0) to the index 12 (13th character), <o> is in index:\n"
        + txt1.lastIndexOf("o", 12));
    alert("From the last index, The first index of <are> --> <a> is in index:\n" 
        + txt1.lastIndexOf("are"));
    /*
        Like indexOf, if a character or a sub string did not found, lastIndexOf returns <-1>;
        You can try some examples yourself :);
        ---
        Special attention: 
            lastIndexOf starts searching from the end ...
            But reports index from the beginning (index 0):);
            ---
            indexOf: from an index to the end ([index:] in python);
            lastIndexOf: from the first index (index 0) to an index ([:index+1] in python);
            Note #1: 
                Why index+1? 
                In python, if we use [:4] --> we access to the characters at indexes 0, 1, 2 and 3;
                But here, if we use lastIndexOf(..., 4) --> we can access to the index 4 (plus the above indexes);
                In python, if we use [:5], we access to the indexes 0, 1, 2, 3 and 4;
            Note #2:
                Consider, lastIndexOf(...,index) slightly different from [:index+1] in python :);
                What different? lastIndexOf(...,index) returns the last character before index+1 not the first character;
                 

        Think about this example and try it:
            alert("From the last index, The first index of <are> --> <a> is in index:\n" + txt1.lastIndexOf("are"), 8);
            What will be returned? ...
        
        What do you think about this?
            alert("From the last index, The first index of <are> --> <a> is in index:\n" + txt1.lastIndexOf("are"), 7);
    */


    alert("New txt1 (with replace <o> with <O>) is:\n" + txt1.replace("o", "O"));                    // #8;
    alert("New txt1 (with replace < you> with <-they>) is:\n" + txt1.replace(" you", "-they"));
    alert("If first character or word does not exist, we get:\n" + txt1.replace("y ou", "-they"));
    /*
        Note #1: as you saw, just the first <o> changed with <O> in the first state;
        Note #2: as you saw, we did not have any changes in the last state :);
        ---
        Like concat, To change txt1, we should use assignment (txt1 = txt1.replace(...,...));
    */


    alert("A substring from txt1 (index 0 (1st character) to index 5 (6th character)):\n"           // #10;
        + txt1.slice(0, 6)); 
    alert("A substring from txt1 (index 5 (6th character) to index 12 (13th character)):\n"           
        + txt1.slice(5, 13)); 
    /*
        Just like python:
            txt1.slice(5, 13) ~ txt1[5:13] , txt1.slice(5) ~ txt1[5:] (from index 5 to the end);
    */
    
            
    var txt1Array = txt1.split(" ");                                                                // #11;
    var txt1Array2 = txt1.split(" ", 2);  // 2 is length of array;                                                            
    alert("An array by splitting txt1 by the white spaces:\n" + txt1Array);
    alert("Legth of obtained array:\n" + txt1Array.length);
    alert("third element of obtained array:\n" + txt1Array[2]);
    alert("An array by splitting txt1 by the white spaces with length = 2:\n" + txt1Array2);
    /*
        Obtained arrays:
            txt1Array[0]  --> "Hi;";
            txt1Array[1]  --> "how";
            txt1Array[2]  --> "are";
            txt1Array[3]  --> "you?";

            txt1Array2[0]  --> "Hi;";
            txt1Array2[1]  --> "how";
    */


    alert("Substring of txt1 between index 3 and index 10 is:\n" + txt1.substring(3, 10));          // #12;
    /*
        Attention: 
            Returns characters between index 3 and index 10;
            Doesn't return character of index 3 and index 10;
    */


    alert("txt1 with uppercase alphabets:\n" + txt1.toUpperCase());                                 // #13;
    alert("txt1 with lowercase alphabets:\n" + txt1.toLowerCase());                                 // #14;
    /*                            
        Like concat and slice, To change txt1, we should use assignment;
        txt1 = txt1.toUpperCase()  or  txt1 = txt1.toLowerCase();
    */


    // Wrapper methods (they are all expired) ----------------------------------------------
    var txt3 = "Section 4";
    alert(txt3.anchor('sm.mahdavi'));
    alert(txt3.big());
    alert(txt3.bold());
    alert(txt3.italics());
    document.write(txt3.link("http://127.0.0.1:5500/2.%20JS%20Adavnced/S4-/index.html"));
    document.write("<br />Click on the above link to return to the main page...");
    alert(txt3.small());
    alert(txt3.strike());
    alert(txt3.sub());
    alert(txt3.sup());
    /*
        As you can see, all these methods have expired;
        You can check them to remind the html tags and their function;
    */


    // Object functions in JavaScript (like classes in other languages) --------------------
    function programmer(name, nickName, pLang) {
        /*
        What is the <this>?
        <this> is a keyword that points to its own function;
        Here, <this> points to --> function programmer(...) {...};
        <this> is equivalent of <self> in python classes (or <this> in java and c++ classes);
        ---
        In this function (see it as an object), we have 3 properties: name, nickName and pLang;
        */
        this.name = name;
        this.nickName = nickName;
        this.pLang = pLang;  // programming language;
    }

    /*
    How can we use from objects in JavaScript?
        var <a name for our object> = new <object name>(something here);
        for exmple:
            var arr1 = new Array(...);  --> to make an array object;
            var str1 = new String(...); --> to make a string object;
            var date1 = new Date(...);  --> to make a date object;
            and etc ...
    */
    var programmer1 = new programmer("Seyed mahdi", "theMHD", "JavaScript");
    alert("The name of programmer1 is:\n" + programmer1.name);
    alert("The nickname of programmer1 is:\n" + programmer1.nickName);
    alert("The programming language of programmer1 is:\n" + programmer1.pLang);

    /*
    Change the defined object (programmer);
    How? with add new properties;
    See bottom:
    */
    programmer.prototype.age = null;  // age added as a new property;
    programmer1.age = 20;             // 20 saves as a string ("20");
    alert("The age of programmer1 is:\n" + programmer1.age);
}



// Part 11 ------------------------------------------------------------------------------------------------------------
// JavaScript Objects - Date;

function dateObject() {
    
    var currDate = new Date(); 
    alert(currDate);
    //  To get the current date of client's system;

    var tsDate = new Date(98674789238947);
    alert(tsDate);
    /*
        What is it? the Unix Time Stamp;
        It represents the date of 98674789238947 milliseconds after 00:00:00 UTC on 1 January 1970;
        Learn more about unix-timestamp: 
            https://www.unixtimestamp.com/;
            https://en.wikipedia.org/wiki/Unix_time
        ---
        Why is a timestamp is helpful?
            Often used to compare tow dates or times; Which one is newer?
            1 day --> 86400 seconds;
            1 hour --> 3600 seconds;
            1 minute --> 60 seconds;
            1 second --> 1000 milliseconds;
    */

    var dateString = new Date("2020/06/12");
    alert(dateString);
    /*
        The date string;
        Try it and see the result :);
        Format: year/month/day;
    */

    var theDate = new Date(2022, 2, 18, 21, 50, 44, 839);
    alert(theDate); 
    /*
        A desired date or time;
        Format: year, month, day, hour, minute, second, millisecond;
        ---
        Why we see March instead of February?
            Because time numbers are starts with 0;
            0 --> january, 1 --> February, 2 --> March, ..., december --> 11;
    */

    
    // Date-object methods -----------------------------------------------------------------
    alert(currDate.getDate());
    alert(currDate.getFullYear());
    alert(currDate.getMonth());
    alert(currDate.getDay());
    alert(currDate.getHours());
    alert(currDate.getMinutes());
    alert(currDate.getSeconds());
    alert(currDate.getMilliseconds());
    /*
        What above methods do?
            .getDate():
                It shows the day number in the current month;
            .getFullYear():
                It shows the current year (in fully type);
            .getMonth():
                It shows the month number in the current year;
                Starts from number 0(january) to 11(december);
            .getDay():
                It shows the day number in the current week;
                Sunnday  --> 0;
                Monday   --> 1;
                ...
                Saturday --> 6;

        Other methods need no explanation :);
    */

    alert(currDate.getTime());
    /*
        It converts the current date to a timestamp;
        Scroll up for more explanations (tsDate);
    */

    alert("12 March, 2019:\n" + Date.parse("12 March, 2019"));
    alert("2022/03/04:\n" + Date.parse("2022/03/04"));
    alert("September 21, 2000:\n" + Date.parse("September 21, 2000"));
    alert("december 3 2005:\n" + Date.parse("december 3 2005"));
    /*
        To get the timestamp of a desired date (input can be of any type); 
        Best type for input --> day month (with letters), year (first example);
    */
}