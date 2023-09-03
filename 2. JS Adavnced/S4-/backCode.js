// Part 10 ------------------------------------------------------------------------------------------------------------
// JavaScript Objects - String;

function stringObject() {

    // Learning about some String methods:
    // 1. length   2. constructor;
    var txt1 = "Hi how are you?";
    alert("The txt1 is:\n" + txt1);
    alert("Length of txt1 is:\n" + txt1.length);
    alert("The constructor of txt1 is:\n" + txt1.constructor);

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