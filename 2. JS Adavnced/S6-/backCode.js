// Part 14 ------------------------------------------------------------------------------------------------------------
// JavaScript Objects - Regular expressions (RegExp);

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

    
    // RegExp object methods -----------------------------------------------------------------------
    var pattern1 = /[tshpMeHsD]/;
    
    var word1 = "apple";
    alert(pattern1.test(word1));
    /*
        If even one of << apple >> word letters is
            Existed in the pattern1, test() method returns << true >>;
        ---
        In the next patterns, if there is a common feature between 
            The word and the pattern, test() method returns << true >>;
    */

    var word2 = "html";
    alert(pattern1.exec(word2));
    /*
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
    alert(pattern2.test(word3));
    alert(pattern3.test(word3));
    alert(pattern4.test(word3));
    alert(pattern5.test(word3));
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


    // RegExp - Meta Characters --------------------------------------------------------------------
    /*
        List of meta Characters:
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

    var pattern6 = /a.i/;
    var txt1 = "Ali gets a react api for his project";
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
    alert(pattern7.test(txt2));
    alert(pattern7.exec(txt2));
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
    alert(pattern9.test(txt2));
    alert(pattern9.exec(txt2));
    alert(pattern10.test(txt2));
    alert(pattern10.exec(txt2));
    /*
        4.How does << \d >> work?
            It used to find the << digit >> characters;
            If there is one (or more) << digit >> character(s) in our text, we are alerted << true >>;
            ---
            What is the << digit >> characters?
                0, 1, 2, 3, ..., 9 (Numeric characters (numbers));
                Attention: One digi; Not a multi-digit number;
        ---
        5.How does << \D >> work?
            It used to find the << non-digit >> characters;
            If there is one (or more) << non-digit >> character in our text, we are alerted << true >>;
            >> This pattern is the inverse of the previous pattern (\D ~ ^\d)
    */

    var pattern11 = /\s/;
    var pattern12 = /\s/;
    alert(pattern11.test(txt2));
    alert(pattern11.exec(txt2));
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
    alert("aaa" + pattern13.test(txt3));
    alert(pattern13.exec(txt3));
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
            What does "In the middle" meaning? 
                A word in a text (for example txt3) does not begin...
                    Or end with "ear"; But it contains "ear";
    */
    

    // RegExp - Meta Characters - Pracitce ---------------------------------------------------------
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
}