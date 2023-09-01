// Part 8 ------------------------------------------------------------------------------------------------------------
// Document Object Model (DOM) Tree; 
// What is the logic of DOM? every tags are known as a node (a node in the DOM tree :);

function changeValue() {
    // document.getElementById("comp1").innerHTML = "somthing on the way";

    var paragraph = document.getElementsByTagName("p");
    // Now, paragraph is an array of <p>..</p> tags;
    for (var index = 0; index < 3; index++) {
        paragraph[index].innerHTML = "Paragraph-" + (index + 1);
        paragraph[index].style.color = "darkblue";
        paragraph[index].style.borderWidth = "3px";
        paragraph[index].style.borderStyle = "Solid";
        paragraph[index].style.borderColor = "darkred";
    }

    // alert(document.getElementById('img1').src) --> it shows bottom address (for dom-tree-js.png);
    if (document.getElementById('img1').src == "http://127.0.0.1:5500/2.%20JS%20Adavnced/S3-/dom-tree-js.png")
        document.getElementById('img1').src = "dom-tree-js-2.png";
    else
        document.getElementById('img1').src = "dom-tree-js.png";
    
}

function childes() {
    // Attention: in this function we work with div tag (with id="comp1") and its chilren tags;

    alert(document.getElementById("comp1"));                    // a node (a HTML tag --> div with id="comp1");
    alert(document.getElementById("comp1").childNodes);         // an array of children of above node (inner <p>..</p> tags and ...);
    alert(document.getElementById("comp1").childNodes.length);  // number of children (length of above array);
    /*
    Note #1: why length is 7? --> we have 3 inner <p>..</p> tags and 4 new lines (\n);
    Note #2: in childNodes array we have only chilren of div tag and grandchilren are didn't counted (grandchildren: texts in <p>..</p> tags);
    */

    alert(document.getElementById("comp1").childNodes[0]);  // a new line (\n) --> an object with type text;
    alert(document.getElementById("comp1").childNodes[1]);  // first <p>..</p> tag --> an object with type HTML paragraph element;

    document.getElementById("comp1").childNodes[3].style.color = "red";
    document.getElementById("comp1").childNodes[3].innerHTML = "Changed text (P2)";
    // childNodes[2] is new line and childNodes[3] is the second <p>..</p> tag;

    alert(document.getElementById("comp1").parentNode);                        // parent node of div tag(node) --> body tag;
    alert(document.getElementById("comp1").parentNode.parentNode);             // grandparent node of div tag(node) --> html tag;
    alert(document.getElementById("comp1").parentNode.parentNode.firstChild);  // first child of html tag (head tag);

    document.getElementById("comp1").firstChild.nextSibling.style.color = "darkgreen";
    document.getElementById("comp1").firstChild.nextSibling.innerHTML = "Changed text (P1)";
    // First child of div tag is a new line (\n) and first sibling of first child(\n) is the first <p>..</p> tag (P1); 

    // nodeName: tag name;
    alert(document.getElementById("comp1").firstChild.nextSibling.nodeName);            // nodeName: tag name;
    alert(document.getElementById("comp1").firstChild.nextSibling.parentNode.nodeName)  // name of parent tag of first <p>..</p> tag;
    alert(document.getElementById("comp1").firstChild.nextSibling.firstChild.nodeName)  // name of first child tag of first <p>..</p> tag;

    // nodeValue: tag value;
    alert(document.getElementById("comp1").firstChild.nodeValue);              // here, value is a new line('\n') or space;
    alert(document.getElementById("comp1").firstChild.nextSibling.nodeValue);  // value of first <p>..</p> tag (this tag doesn't have any value so value is <null>);

    // nodeType: type of node;
    alert(document.getElementById("comp1").firstChild.nodeType);               // 3;
    alert(document.getElementById("comp1").firstChild.nextSibling.nodeType);   // 1;
    /*
    Note: what is the Type? it's just a number :) ...
    Types number: 
    elementNodes   -->  1 (tags);
    attrabuteNodes -->  2 (src, value, title, type and ... (tag attributes));
    textNodes      -->  3 (texts);
    commentNodes   -->  8 (<!--somthing-->);
    documentNode   -->  9 (the ROOT node (parent of all nodes));
    */
}



// Part 9 ------------------------------------------------------------------------------------------------------------
// Changing the DOM;
// Changing the HTML file (with change, add or remove some elements) with using js codes;

function addNewLinks(flagNumber) { 
    /* 
    Attention #1: in this function we work with div tag (with id="comp2") and its chilren tags;
    Attention #2: 
        In this function we work with <a>..</a> tag and its attributes (as a link);
        We can also use all the tags with their attributes;
    Parameters:
        flagNumber:
            1 --> to add a new link after link 2;
            2 --> to add a new link before link 1;
    Functions or methods:
        append: to insert an element at end of an element;
        insertBefore: to insert an element before an element;
        replaceChild: to replace an element with a child of an element;
    */

    var newLink = document.createElement('a');  // <a>..</a> tag;
    newLink.href = "#";

    // Method #1 (to add a link in div tag);
    var newLinkText = document.createTextNode(' Link 3 ');
    newLink.appendChild(newLinkText);  

    // Method #2;
    newLink.innerHTML = " Link 3 ";

    if (flagNumber == 1) {
        document.getElementById("comp2").appendChild(newLink);
    } else if (flagNumber == 2) {
        var targets = document.getElementById("comp2").getElementsByTagName("a"); 
        // Note: var targets = document.getElementsByTagName("a") --> it works (so using getElementById("comp2") is not necessary); but ...
        // Attention: if we want to use <a>..</a> tags that are only in div tag (with id="comp2"), using getElementById("comp2") is necessary;

        document.getElementById("comp2").insertBefore(newLink, targets[0]);  // target[0] --> first <a>..</a> tag (link 1);
        /*
        A new method:
        document.getElementById("comp2").replaceChild(newLink, targets[0]);  
        What is replaceChild method? to replace a child (targets[0] --> link 1) with a new child (newLink --> link 3); 
        You can try this :);
        */
    }
}

function removeLinks () {
    /* 
    Attention #1: in this function we work with div tag (with id="comp2");
    Attention #2: 
        In this function we work with <a>..</a> tag and its attributes (as a link);
        We can also use all the tags with their attributes;
    Functions or methods:
        removeChild: to remove a child of an element;
    */

    var parentElemnt = document.getElementById("comp2");
    var children = parentElemnt.getElementsByTagName("a");
    parentElemnt.removeChild(children[0]);  // to remove the first child;
}