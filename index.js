
var num1 = Number(prompt("Enter 1st number: "));
var num2 = Number(prompt("Enter 2nd number: "));

var sum = num1 + num2;
var sub = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2 ;
var rem = num1 % num2;

document.write("First num  : "+num1+"<br>");
document.write("Second num : "+num2+"<br><br>");
document.write(num1+" + "+num2+" = "+ sum + "<br>");
document.write(num1+" - "+num2+" = "+ sub + "<br>");
document.write(num1+" * "+num2+" = "+ mult + "<br>");
document.write(num1+" / "+num2+" = "+ div + "<br>");
document.write(num1+" % "+num2+" = "+ rem + "<br>");