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
            Remember concatenation in strings (concat method) :);
    */  

    alert(carsArray1.indexOf("F"));
    alert(carsArray1.indexOf("Ferrari"));
    alert(carsArray1.indexOf("Bugatti", 2));
    alert(carsArray1.indexOf("bugatti"));
    /*
        Ok? this is like the indexOf method on strings;
        It works for array elements (not a single letter or a substring of an element);
        ---
        Also we have the <<< lastIndexOf >>> method for arrays;
        Like lastIndexOf method in strings;
        Of course with the above condition (it works for array elements...);
    */
}