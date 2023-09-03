// Part 10 ------------------------------------------------------------------------------------------------------------
// JavaScript Objects - String;

function stringObject() {

    /*
    Learning about some String methods:
        1. length, to get length of a string;
        2. constructor, to get constructor of a string;
        3. charAt, to get charactor of a string index;
        4. charCodeAt, to get ascii code of above charactor; 
        5. concat, to concatinate some strings to a string (infinite);
    */

    var txt1 = "Hi; How are you?";
    alert("The txt1 is:\n" + txt1);
    alert("Length of txt1 is:\n" + txt1.length);                                     // #1;
    alert("The constructor of txt1 is:\n" + txt1.constructor);                       // #2;
    alert("The fifth charator (index 4) is:\n" + txt1.charAt(4));                    // #3;
    alert("The ascii code of fifth charator (index 4) is:\n" + txt1.charCodeAt(4));  // #4;

    var txt2 = "\nWhats up?";
    alert(txt1.concat("\n-Thanks;", " I'm fine;", txt2));                            // #5;
    alert("Attention: txt1 did not change ...\n" + "txt1:  " + txt1);
    /*
        To change txt1, you should use assignment (see bottom):
        txt1 = txt1.concat("\n-Thanks;", " I'm fine;", txt2);
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
    */
    programmer.prototype.age = null;
    programmer1.age = 20;  // 20 saves as string ("20");
    alert("The age of programmer1 is:\n" + programmer1.age);


}