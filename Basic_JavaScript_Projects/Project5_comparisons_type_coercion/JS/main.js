let s = "10";
let n = 10;
// data types
document.writeln("s: ", s, typeof s);
document.writeln("n: ", n, typeof n);
// type coercion
document.writeln("s + n: ", s + n, typeof (s + n));

// infinity
let inf = 2e310;
let negInf = -2e310;
document.writeln("infinity: ", inf, typeof inf);
document.writeln("negative infinity: ", negInf, typeof negInf);
// comparisons and booleans
document.writeln("5 < 3: ", 5 < 3);
console.log("5 < 3: ", 5 < 3);
console.log("s == n: ", s == n);
console.log(5 === 5);
console.log(5 === "6");
console.log(5 === "5");
console.log(5 === 6);
console.log(5 === 5 && 6 === 6);
console.log(5 === 5 || 6 === 5);
console.log(!(5 === 6));
