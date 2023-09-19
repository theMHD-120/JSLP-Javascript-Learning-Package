// Part 14 ------------------------------------------------------------------------------------------------------------
// JavaScript Objects - Regular expressions (RegExp (regex));

function regExpObject() {

    /*
        Definition:
            A regular expression is a sequence of characters that forms a search pattern;
            Syntax of object defining: /pattern/modifiers;
        ---
        See the following links to learn more about regular expressions (RegExp):
            https://www.w3schools.com/js/js_regexp.asp
            https://en.wikipedia.org/wiki/Regular_expression
        ---
        Patterns are case-sensitive;
        What the meaning of case-sensitive?
            Uppercase and Lowercase letters are different;
            For example JavaScript and javascript are different;         
    */


    // RegExp (regex) object methods ---------------------------------------------------------------
    alert("RegExp (regex) - Methods");

    var pattern1 = /[tshpMeHsD]/;
    var word1 = "apple";
    alert(pattern1.test(word1));
    var word2 = "html";
    alert(pattern1.exec(word2));
    /*
        RegExp (regex) methods:
            1.test():
                If even one of << apple >> word letters is...
                    Existed in the pattern1, test() method returns << true >>;
                ---
                In the next patterns, if there is a common feature between...
                    Word (or text) and the pattern, test() method returns << true >>;
            2.exec():
                Returns the first common letter between pattern and the word;
                First letter in the word;
                ---
                In the next patterns, if test() method returns << true >>,
                    exec() method returns the first letter or character that has the common feature;
    */
    
    var word3 = "MHD120";
    var pattern2 = /[a-z]/;
    var pattern3 = /[a-z]/i;
    var pattern4 = /[a-zA-Z]/;
    var pattern5 = /[^0-9]/;
    alert("Pattern 2: " + pattern2.test(word3));
    alert("Pattern 3: " + pattern3.test(word3));
    alert("Pattern 4: " + pattern4.test(word3));
    alert("Pattern 5: " + pattern5.test(word3));
    /*
        P2 -> Returns << true >> if the word contains lowercase letters;
        P3 -> Returns << true >> if the word contains letters (case is ignored with << i >> modifier); 
        P4 -> Returns << true >> if the word contains letters (a to z and A to Z);
        ---
        P5 -> Retuens << true >> if there is a non-numeric (one or more) character in the word;
        Be careful; If there is (( even one )) non-numeric character, we are alerted << true >>;
        << ^ >> --> << not >> sign; 
        ---
        For example:
            If pattern5 = /[^abc]/ :
                alert(pattern5.test("dfs"));   --> returns << true >>;
                alert(pattern5.test("afd"));   --> returns << true >>;
                alert(pattern5.test("afba"));  --> returns << true >>;
                alert(pattern5.test("afbq"));  --> returns << true >>;
                alert(pattern5.test("afbcq")); --> returns << true >>;
                alert(pattern5.test("abc"));   --> returns << false >>;
    */  


    // RegExp (regex) - Meta Characters ------------------------------------------------------------
    /*
        List of meta characters:
            1.Point (.);
            2.Little word characters (\w);
            3.Big word characters (\W);
            4.little Digit characters(\d);
            5.Big digit characters (\D);
            6.little sapce characters (\s);
            7.Big space characters (\S);
            8.little b characters (\b);
            9.Big B characters (\B);
    */
    alert("RegExp (regex) - Meta Characters");

    var pattern6 = /a.i/;
    var txt1 = "Ali gets a react api for his project";
    alert("||| Pattern 6 |||");
    alert(pattern6.test(txt1));
    alert(pattern6.exec(txt1));
    /*
        1.How it works?
            Is there a word with type (a.i) in the txt1? (a, any character, i);
            Any character?
                Yes; Any character;
                White space, &, ;, -, a letter, a number and ...;s
        ---
        Attention:
            Ali is not in the /a.i/ type;
            But ali is :);
        ---
        Note:
            /a.i/ type   --> a, any character, i;
            /a..i/ type  --> a, any character, any character, i;
            /a...i/ type --> a, any character, any character, any character, i;
            and more :);
    */

    var pattern7 = /\w/;
    var pattern8 = /\W/;
    var txt2 = "I'm 20 years old;";
    alert("||| Pattern 7 |||");
    alert(pattern7.test(txt2));
    alert(pattern7.exec(txt2));
    alert("||| Pattern 8 |||");
    alert(pattern8.test(txt2));
    alert(pattern8.exec(txt2));
    /*
        2.How does << \w >> work?
            It used to find the << word >> characters;
            If there is one (or more) << word >> character(s) in our text, we are alerted << true >>;
            ---
            What is the << word >> characters?
                a, b, c, d, ..., z (lowercase letters);
                A, B, C, D, ..., Z (Uppercase letters);
                0, 1, 2, 3, ..., 9 (Numeric characters (numbers));
                and the underline << _ >> character;
                Attention: space is not a word chracter :);
        ---
        3.How does << \W >> work?
            It used to find the << non-word >> characters;
            If there is one (or more) << non-word >> character(s) in our text, we are alerted << true >>;
            >> This pattern is the inverse of the previous pattern (\W ~ ^\w)
    */

    var pattern9 = /\d/;
    var pattern10 = /\D/;
    alert("||| Pattern 9 |||");
    alert(pattern9.test(txt2));
    alert(pattern9.exec(txt2));
    alert("||| Pattern 10 |||");
    alert(pattern10.test(txt2));
    alert(pattern10.exec(txt2));
    /*
        4.How does << \d >> work?
            It used to find the << digit >> characters;
            If there is one (or more) << digit >> character(s) in our text, we are alerted << true >>;
            ---
            What is the << digit >> characters?
                0, 1, 2, 3, ..., 9 (Numeric characters (numbers));
                Attention: One digit; Not a multi-digit number;
        ---
        5.How does << \D >> work?
            It used to find the << non-digit >> characters;
            If there is one (or more) << non-digit >> character in our text, we are alerted << true >>;
            >> This pattern is the inverse of the previous pattern (\D ~ ^\d)
    */

    var pattern11 = /\s/;
    var pattern12 = /\s/;
    alert("||| Pattern 11 |||");
    alert(pattern11.test(txt2));
    alert(pattern11.exec(txt2));
    alert("||| Pattern 12 |||");
    alert(pattern12.test(txt2));
    alert(pattern12.exec(txt2));
    /*
        6.How does << \s >> work?
            It used to find the << whitespace >> characters;
            If there is one (or more) << whitespace >> character(s) in our text, we are alerted << true >>;
            ---
            What is the << whitespace >> characters?
                one space << ' ' >>, tab (4 to 5 spaces) << '    ' >>, new line << '\n' >> and ... 
        ---
        7.How does << \S >> work?
            It used to find the << non-whitespaces >> characters;
            If there is one (or more) << non-whitespaces >> character(s) in our text, we are alerted << true >>;
            >> This pattern is the inverse of the previous pattern (\S ~ ^\s)
    */

    var pattern13 = /\bjava/;
    var pattern14 = /\Bear/;
    var txt3 = "Here is the javascript learning package;";
    alert("||| Pattern 13 |||");
    alert(pattern13.test(txt3));
    alert(pattern13.exec(txt3));
    alert("||| Pattern 14 |||");
    alert(pattern14.test(txt3));
    alert(pattern14.exec(txt3));
    /*
        8.How does << \b... >> work (explanation with example)?
            In the first pattern (pattern13), if there is one (or more)...
                Word(s) starting with "java", we are alerted << true >>;
            Ok? this meta character checks the start of the words in a text;
        ---
        9.How does << \B... >> work (explanation with example)? 
            In the second pattern (pattern14), if there is one (or more)...
                Word(s) containing "ear" in the middle, we are alerted << true >>;
            What does "In the middle" mean? 
                A word in a text (for example txt3) doesn't begin...
                    Or doesn't end with "ear"; But it contains "ear";
    */


    // RegExp (regex) - Meta Characters - Pracitce -------------------------------------------------
    alert("RegExp (regex) - Meta Characters - Practice");

    var practicePattern = /[^ا-یa-zA-Z]/;
    var name1 = prompt("Enter your name: ");
    if(!practicePattern.test(name1)) 
        alert("Your name is valid;");
    else
        alert("Your name is invalid;");
    /*
        A short practice for validation of username;
        For persian and english words (lowercase and uppercase);
        Try and change it yourself (for example for password (with numbers), email or ...);
    */


    // RegExp (regex) - The Quantifiers ------------------------------------------------------------
    /*
        List of quantifiers:
            1.<< any character(s) >>+;
            2.<< any character(s) >>?;
            3.\d{number of digits (n)};
            4.\d{start (n),end (m)};
            5.\d{start (n),};
            6.<< any character(s) >>$;
            7.^<< any character(s) >>;
    */
    alert("RegExp (regex) - The Quantifiers");

    var pattern15 = /n+/;
    var pattern16 = /'+/;
    var pattern17 = /I+/;
    var pattern18 = /;+/;
    var pattern19 = / +/;
    var pattern20 = /ha+/;
    var pattern21 = /our+/;
    var pattern22 = /p+/;
    var txt4 = "What's your name? I am mahdi;";
    alert("||| Pattern 15 |||");
    alert(pattern15.test(txt4));
    alert(pattern15.exec(txt4));
    alert("||| Pattern 16 |||");
    alert(pattern16.test(txt4));
    alert(pattern16.exec(txt4));
    alert("||| Pattern 17 |||");
    alert(pattern17.test(txt4));
    alert(pattern17.exec(txt4));
    alert("||| Pattern 18 |||");
    alert(pattern18.test(txt4));
    alert(pattern18.exec(txt4));
    alert("||| Pattern 19 |||");
    alert(pattern19.test(txt4));
    alert(pattern19.exec(txt4));
    alert("||| Pattern 20 |||");
    alert(pattern20.test(txt4));
    alert(pattern20.exec(txt4));
    alert("||| Pattern 21 |||");
    alert(pattern21.test(txt4));
    alert(pattern21.exec(txt4));
    alert("||| Pattern 22 |||");
    alert(pattern22.test(txt4));
    alert(pattern22.exec(txt4));
    /*
        1.How does << (any character(s))+ >> work?
            If there is a pattern (substring) with a character and something in the continuation of that...
                (Or only one character with nothing in continuation of that) in a text, we are alerted << true >>;
        ---
        In the above examples, there is no pattern for pattern22 in the txt4; 
    */

    var pattern23 = /1234?/;
    var word4 = "123400";
    var word5 = "12340";
    var word6 = "1234";
    var word7 = "123";
    var word8 = "12";
    alert("||| Pattern 23 |||");
    alert(pattern23.test(word4));
    alert(pattern23.exec(word4));
    alert(pattern23.test(word5));
    alert(pattern23.exec(word5));
    alert(pattern23.test(word6));
    alert(pattern23.exec(word6));
    alert(pattern23.test(word7));
    alert(pattern23.exec(word7));
    alert(pattern23.test(word8));
    alert(pattern23.exec(word8));
    /*
        2.How does << (any character(s))? >> work?
            Is there any pattern (substring) of our pattern in a text or word?
                If yes, we are alerted << true >>;
        ---
        In the above examples, there is no pattern for pattern23 in the word8; 
    */

    var pattern24 = /\d{8}/;
    var pattern25 = /\d{4,8}/;
    var pattern26 = /\d{7,}/;
    var txt5 = "This is a nine-digits number: 120000000";
    var txt6 = "This is a seven-digits number: 1200000";
    var txt7 = "This is a five-digits numbe: 12000";
    alert("||| Pattern 24 |||");
    alert(pattern24.test(txt5));
    alert(pattern24.exec(txt5));
    alert(pattern24.test(txt6));
    alert(pattern24.exec(txt6));
    alert(pattern24.test(txt7));
    alert(pattern24.exec(txt7));
    alert("||| Pattern 25 |||");
    alert(pattern25.test(txt5));
    alert(pattern25.exec(txt5));
    alert(pattern25.test(txt6));
    alert(pattern25.exec(txt6));
    alert(pattern25.test(txt7));
    alert(pattern25.exec(txt7));
    alert("||| Pattern 26 |||");
    alert(pattern26.test(txt5));
    alert(pattern26.exec(txt5));
    alert(pattern26.test(txt6));
    alert(pattern26.exec(txt6));
    alert(pattern26.test(txt7));
    alert(pattern26.exec(txt7));
    /*
        3.What does << \d{number of digits (n)} >> do?
            It used to find the << n-digit(s) >> numbers;
            If there is one (or more) << n-digit(s) >> number(s) in our text, we are alerted << true >>;
        ---
        4.What does << \d{start(n), end(m)} >> do?
            It used to find the << n-digit(s) >> to << m-digit(s) >> numbers;
            Minimum --> << n-digit(s) >> /// Maximum --> << m-digit(s) >> numbers;
        ---
        5.What does << \d{start(n),} >> do?
            It used to find the << n-digit(s) >> numbers and higher;
            Minimum --> << n-digit(s) >> /// Maximum --> unlimited :);
    */

    var pattern27 = /e$/;
    var pattern28 = /ye$/;
    var pattern29 = /^G/;
    var pattern30 = /^Goo/;
    var pattern31 = /^[a-zA-Z]/;
    var txt8 = "Good bye";
    alert("||| Pattern 27 |||");
    alert(pattern27.test(txt8));
    alert(pattern27.exec(txt8));
    alert("||| Pattern 28 |||");
    alert(pattern28.test(txt8));
    alert(pattern28.exec(txt8));
    alert("||| Pattern 29 |||");
    alert(pattern29.test(txt8));
    alert(pattern29.exec(txt8));
    alert("||| Pattern 30 |||");
    alert(pattern30.test(txt8));
    alert(pattern30.exec(txt8));
    alert("||| Pattern 31 |||");
    alert(pattern31.test(txt8));
    alert(pattern31.exec(txt8));
    /*
        6.What does << (any character(s))$ >> do?
            If a text or a word (as a string) ends with our pattern, we are alerted << true >>;
            So it used to check the end of a text or a word with a pattern;
        7.What does << ^(any character(s)) >> do?
            If a text or a word (as a string) starts with our pattern, we are alerted << true >>;
            So it used to check the start of a text or a word with a pattern;
    */
}



// Part 15 ------------------------------------------------------------------------------------------------------------
// JavaScript Objects - Window (BOM - Browser Object Model);

function windowObject() {

    /*
        Definition:
            The parent of all objects, classes, functions, variables and everything else in JavaScript;   
            For example:
                1.When we use << document.getElementById("something") >>, 
                    Originally we use << windows.document.getElementById("something") >>
                2.When we define a global variable << var x = ... >>, actually
                    We use << var window.x = ...>>;
                3.When we define or create a function << function funcName() {} >>,
                    In fact, we use << function window.funcName() {} >>;
                and etc...
    */


    // Window object methods -----------------------------------------------------------------------
    /*
        List of window object methods:
            1.innerWidh and innerHeight (these are attributes);
            2.open(...);
            3.close();
            3.moveTo(...);
    */
    alert("Window - Methods");
    alert("Attention:" +
        "\njust the result of .innerWidth and .innerHeight attributes are shown here;" + 
        "\nTo see the other methods, click on the next buttons;");

    alert(window.innerWidth);
    alert(window.innerHeight);
    /*
        To get the width and height of our web page;
        Try the above methods in different sizes of your webpage and see the results;
        ---
        Note:
            Some browsers, don't support the << window.innerWidth(Height) >> command;
            Such as IE (internet explorer) 5, 6 ,7 and 8;
            So, we have another commands to get the width or height of our web page:
                1.document.documentElement.clientWidth(Height);  --> get size by the <html>..</html> tag;
                2.document.body.clientWidth(Height);  --> get size by the <body>..</body> tag;
            ---
            We can use this assignment to get the size (width or height) of our web page:
                var size = window.innerWidth(Height) || document.body.clientWidth(Height) || document.documentElement.clientWidth(Height);
                What's << || >> sign? --> << or >> sign;
    */
}

var winPage = null;
function windowObjectOpenMethod() {

    winPage = window.open("https://github.com/theMHD-120", "", "_blank");
    /*
        Try and see the result;
        >> A [Window object] with open(...) method;
        >> open("An address", "features of pop-up window", target);
        ---
        Try this in your browser and see the result (open() mehod with no feature and target):
            window.open("https://github.com/theMHD-120");
    */
}
function windowObjectCloseMethod() {

    winPage.close();
    /*
        This method closes the opened window;
        This method has no parameter;
    */
}
function windowObjectMoveMethod() {

    winPage.moveTo(1000, 800);
    winPage.focus();
    /*
        This method moves the opened window to a new coordinates (by pixel);
        Attention: this method may not work on the opened window (after the loading is complete);
        ---
        How doesx << focus() >> method do?
            It focused on the opened window;
    */
}
function windowObjectResizeMethod() {

    winPage.resizeTo(1000, 200);
    winPage.focus();
}