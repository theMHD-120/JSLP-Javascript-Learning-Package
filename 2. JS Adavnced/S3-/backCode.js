// Part 8 ------------------------------------------------------------------------------------------------------------
// Document Object Model (DOM) Tree; 
// Attention: every tags are known as a node (in the DOM tree);

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

    document.getElementById('img1').src = "dom-tree-js-2.png";
}

function childes() {
    // Attention: in this function we work with div tag (with id="comp1");

    alert(document.getElementById("comp1"));  // a node (a HTML tag --> div with id="comp1");
    alert(document.getElementById("comp1").childNodes);  // an array of children of above node (inner <p>..</p> tags);
    alert(document.getElementById("comp1").childNodes.length);  // number of children (length of above array);
    // Note #1: why length is 7? --> we have 3 inner tags and 4 new lines (\n);
    // Note #2: in childNodes array we have only chilren of div tag and grandchilren are didn't counted (grandchildren: texts in <p>..</p> tags);

    alert(document.getElementById("comp1").childNodes[0]);  // a new line (\n) --> an object with type text;
    alert(document.getElementById("comp1").childNodes[1]);  // first <p>..</p> tag --> an object with type HTML paragraph element;

    document.getElementById("comp1").childNodes[3].style.color = "red";
    document.getElementById("comp1").childNodes[3].innerHTML = "Changed text (P2)";
    // childNodes[2] is new line and childNodes[3] is the second <p>..</p> tag;

    alert(document.getElementById("comp1").parentNode);  // parent node of div tag(node) --> body tag;
    alert(document.getElementById("comp1").parentNode.parentNode);  // grandparent node of div tag(node) --> html tag;
    alert(document.getElementById("comp1").parentNode.parentNode.firstChild);  // first child of html tag (head tag);

    document.getElementById("comp1").firstChild.nextSibling.style.color = "darkgreen";
    document.getElementById("comp1").firstChild.nextSibling.innerHTML = "Changed text (P1)";
    // First child of div tag is a new line (\n) and first sibling of first child(\n) is the first <p>..</p> tag (P1); 
}
