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
    */

    // RegExp object methods -----------------------------------------------------------------------
    var pattern = /[tshpMeHsD]/
    var word1 = "apple";
    alert(pattern.test(word1));
    /*
        If only one of << tshpMeHsD >> pattern letterns is
        Existed in the word, test() method returns << true >>;
    */
}