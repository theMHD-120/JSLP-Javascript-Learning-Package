// Part 8 ------------------------------------------------------------------------------------------------------------
// Document Object Model (DOM); 

function changeValue() {
    // document.getElementById("comp1").innerHTML = "somthing on the way";
    var paragraph = document.getElementsByTagName("p"); 
    // Now, paragraph is an array of <p>..</p> tags;

    for (var index = 0; index < 3; index++) {
        paragraph[index].innerHTML = "Paragraph-" + (index + 1);
    }
}

