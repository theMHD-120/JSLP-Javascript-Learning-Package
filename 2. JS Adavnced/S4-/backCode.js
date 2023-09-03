// Part 10 ------------------------------------------------------------------------------------------------------------
// JavaScript Objects - String;

function stringObject() {

    /*
    Learning about some String methods:
        1. length, to get length of a string;
        2. constructor, to get constructor of a string;
        3. charAt, to get character of a string index;
        4. charCodeAt, to get ascii code of above character; 
        5. concat, to concatinate some (infinite) strings to a string;
        6. indexOf, to get index of a character (or first index of a sub string) in a string;
        7. lastIndexOf, like indexOf; But it starts checking from the last index to the beggining;
    */

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
        To change txt1, you should use assignment (see bottom):
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
            Note: 
                Why index+1? 
                In python, if we use [:4] --> we access to the characters at indexes 0, 1, 2 and 3;
                But here, if we use lastIndexOf(..., 4) --> we can access to the index 4 (plus the above indexes);
                In python, if we use [:5], we access to the indexes 0, 1, 2, 3 and 4; 

        Think about this example and try it:
            alert("From the last index, The first index of <are> --> <a> is in index:\n" + txt1.lastIndexOf("are"), 8);
            What will be returned? ...
        
        What do you think about this?
            alert("From the last index, The first index of <are> --> <a> is in index:\n" + txt1.lastIndexOf("are"), 7);
    */





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

    var programmer1 = new programmer("Seyed mahdi", "theMHD", "JavaScript");
    alert("The name of programmer1 is:\n" + programmer1.name);
    alert("The nickname of programmer1 is:\n" + programmer1.nickName);
    alert("The programming language of programmer1 is:\n" + programmer1.pLang);

    /*
    Change the defined object (programmer);
    How? with add new properties;
    See bottom:
    */
    programmer.prototype.age = null;
    programmer1.age = 20;  // 20 saves as string ("20");
    alert("The age of programmer1 is:\n" + programmer1.age);


}