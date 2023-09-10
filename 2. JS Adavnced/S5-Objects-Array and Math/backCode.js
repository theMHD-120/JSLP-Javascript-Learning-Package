// Part 12 ------------------------------------------------------------------------------------------------------------
// JavaScript Objects - Array;

function arrayObject() {

    var array = new Array();

    // Array-object methods -----------------------------------------------------------------
    var carsArray1 = ["BMW", "Ferrari", "Bugatti", "Lamborghini", "Benz"];
    alert("The length of carsArray is:\n" + carsArray1.length);

    var carsArray2 = ["Peugeot", "Alfa romeo", "Koenigsegg", "Mitsubishi"]
    alert("The result of concating carsArray1 with carsArray2 is:\n" + carsArray1.concat(carsArray2));
    alert(carsArray1);
    /*
        Why carsArray1 did not changed?
            Remember concatenation in strings (concat() method) :);
    */  

    alert(carsArray1.indexOf("F"));
    alert(carsArray1.indexOf("Ferrari"));
    alert(carsArray1.indexOf("Bugatti", 2));
    alert(carsArray1.indexOf("bugatti"));
    /*
        Ok? this is like the indexOf() method on strings;
        It works for array elements (not a single letter or a substring of an element);
        ---
        Also we have the <<< lastIndexOf() >>> method for arrays;
        Like lastIndexOf() method in strings;
        Of course with the above condition (it works for array elements...);
    */

    alert(carsArray1.join(", "));
    alert(carsArray1.join(" * "));
    alert(carsArray2.join("-"));
    alert(carsArray1.join(" & "));
    alert(carsArray2.join(" and "));
    /*
        The inverse of split() method in strings;
        split() fot strings (to convert a string to an array);
        join() for arrays (to convert an array to a string);
        ---
        Why carsArray1 and carsArray2 did not changed?
            Assignment is needed; 
            Pay attention to this point because it won't be repeat again ...
            Ok? :);
    */
   
    carsArray1.reverse();
    alert("Reversed carArray1 is:\n" + carsArray1);
    carsArray1.reverse();
    /*
        Assignment is no needed!
        Using the reverse() method, the array will be changed!;
    */

    alert("Now, carsAttay2 is:\n" + carsArray2);
    alert(carsArray2.slice(2));
    alert(carsArray2.slice(2, 5));
    alert(carsArray2.slice(-2));
    alert(carsArray2.slice(-5, -2));
    alert(carsArray2.slice(-1));
    alert(carsArray2.slice(0) + "\n" + carsArray2);
    /*  
        Like slice() method in strings;
        About minus(-) sign:
            carsArray2.slice(-2) = carsArray2.reverse().slice(0,2);
            It represents carsArray2[-2] and carsArray2[-1];
            The first element of array --> carsArray2[0];
            The last element of array --> carsArray2[-1];
            Check out the other examples;
    */

    var carsArray3 = ["Tesla", "Jac", "Mazda", "Toyota", "Nissan", "Ford"];
    alert("carsArray3 before changing:\n" + carsArray3);
    carsArray3.splice(2, 3, "Honda", "Chevrolet", "Suzuki");
    alert("carsArray3 changed (from index 2 to index 4!)\n" + carsArray3);
    /*
        From index 2 with length = 3 (2, 3 and index 4);
        Replacing "Mazda", "Toyota" and "Nissan" with ...
        "Honda", "Chevrolet", "Suzuki" (in order);
        ---
        You can test some more examples anout splice() method;
    */

    alert(carsArray3.toString());
    /*
        How does arrayName.toString() work?
            Like arrayName.join(",");
    */


    // Stack data structure with aaray object ----------------------------------------------
    /*
        To learn about stack data structure, see the following links:
            https://www.geeksforgeeks.org/stack-data-structure
            https://en.wikipedia.org/wiki/Stack_(abstract_data_type)

        Two stack methods: 
            1.pop;
            2.push;
    */
    var theLastCar2 = carsArray2.pop();
    alert("The last element of carsArray2 is removed:\ncarsArray2 = " + carsArray2);
    alert("The removed element is assigned to theLastCar2;\ntheLastCar2 = " + theLastCar2);

    carsArray1.push(theLastCar2);
    alert("The removed element (from carsArray2) is pushed into the carsArray1;\ncarsArray1 = " + carsArray1);
    carsArray2.push("Renault", theLastCar2, "Pagani");  // it can take infinite inputs;
    alert("Three new cars pushed into the carsArray2;\ncarsArray2 = " + carsArray2);


    // Queue data structure with aaray object ----------------------------------------------
    firstElement = carsArray1.shift();
    alert("The removed element (from carsArray1) is:\n" + firstElement);
    /*
        All array elements are shifted to the left (one home (or index));
        9 --> 8;
        8 --> 7;
        ...
        1 --> 0;
        0 (first index) is returned;
        It (first index) removed from the array;
        ...
        This feature can be used to make a queue data struncture;
        Learn about queue data structure:
            https://www.geeksforgeeks.org/queue-data-structure/;   
    */
}