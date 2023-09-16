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
            pattern5 = /[^abc]/;
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
            4.little Digit  characters(\d);
            5.Big digit characters (\D);

    */

    var pattern6 = /a.i/;
    txt1 = "Ali gets a react api for his project";
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
    txt2 = "I'm 20 years old;";
    alert(pattern7.test(txt2));
    alert(pattern7.exec(txt2));
    alert(pattern8.test(txt2));
    alert(pattern8.exec(txt2));
    /*
        2.How does << \w >> work?
            It used to find the << word >> characters;
            If there is one (or more) << word >> character in our text, we are alerted << true >>;
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
            If there is one (or more) << non-word >> character in our text, we are alerted << true >>;
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
            If there is one (or more) << digit >> character in our text, we are alerted << true >>;
            ---
            What is the << digit >> characters?
                0, 1, 2, 3, ..., 9 (Numeric characters (numbers));
                >> One digi; Not a multi-digit number;
        ---
        5.How does << \D >> work?
            It used to find the << non-digit >> characters;
            If there is one (or more) << non-digit >> character in our text, we are alerted << true >>;
            >> This pattern is the inverse of the previous pattern (\D ~ ^\d)
    */

    var pattern12 = /[^ا-یa-zA-Z]/;
    var name1 = prompt("Enter your name: ");
    if(!pattern12.test(name1)) 
        alert("Your name is valid;");
    else
        alert("Your name is invalid;");
    /*
        A short practice for validation of username;
        For persian and english words (lowercase and uppercase);
        Try and change it yourself (for example for password (with numbers), email or ...);
    */
}