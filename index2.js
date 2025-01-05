/*var num=Number(prompt("Enter Your Test Number : "));
if(num%2==0)
console.log("even");
else 
console.log("odd");

if (num>0)
console.log("Positive");
else if(num==0)
console.log("Zero");
else 
console.log("Negative");*/

var num = Number(prompt("Enter Your Test Number:"));

var output = "";

if (num % 2 === 0) {
    console.log("Even");
    output += "The number is Even.<br>";
} else {
    console.log("Odd");
    output += "The number is Odd.<br>";
}

if (num > 0) {
    console.log("Positive");
    output += "The number is Positive.<br>";
} else if (num === 0) {
    console.log("Zero");
    output += "The number is Zero.<br>";
} else {
    console.log("Negative");
    output += "The number is Negative.<br>";
}

document.write("<h1>Number Test Results</h1>");
document.write(output);
