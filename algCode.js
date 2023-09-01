function pow(x, y) {
    return x ** y;
}

var x = [4, 5, 6];
var y = 4;

for (let index = 0; index < 3; index++) {
    console.log(pow(x[index], y));
}

var n = "3+4*8";
console.log(parseFloat(n));

console.log(1/0);

var x = 2 / 1;
x = Number(x);
console.log(x);

var arr = "-213.2485";
console.log(Number(arr))
arr = arr.slice(0, -1);
console.log(arr);
console.log(Math.floor(3.2));
console.log("----------------------------------")

x = "2.1y3";
console.log(Number(x));
console.log(parseFloat(x));
// console.log(eval(x));  // gets an error;

var s1 = "aVC";
var s2 = "avc";
if (s1.toLowerCase() == s2)
    console.log(true);
else 
    console.log(false);
console.log(s1.toLowerCase);

var s3 = "aVc";
var s4 = "avC";
if (s3.matchAll(s4))
    console.log(true)