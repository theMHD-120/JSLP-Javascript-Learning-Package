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