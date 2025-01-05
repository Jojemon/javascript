/*var num=Number(prompt("Enter Your Total Mark : "));

if(num<0 || num>100)
console.log("Enter Valid Mark");
else{
if(num>=80 && num<=100)
console.log("A+");
else if(num>=75 && num<=79)
console.log("A");
else if(num>=70 && num<=74)
console.log("A-");
else if(num>=65 && num<=69)
console.log("B+");
else if(num>=60 && num<=64)
console.log("B");
else if(num>=55 && num<=59)
console.log("B-");
else if(num>=50 && num<=54)
console.log("C+");
else if(num>=45 && num<=49)
console.log("C");
else if(num>=40 && num<=44)
console.log("D");
else if(num>=0 && num<=39)
console.log("F");
   }*/

var num = Number(prompt("Enter Your Total Mark:"));

if (num < 0 || num > 100) {
    console.log("Enter a Valid Mark");
    document.write("Enter a Valid Mark");
} else {
    var grade = "";

    if (num >= 80 && num <= 100) {
        console.log("A+");
        grade = "A+";
    } else if (num >= 75 && num <= 79) {
        console.log("A");
        grade = "A";
    } else if (num >= 70 && num <= 74) {
        console.log("A-");
        grade = "A-";
    } else if (num >= 65 && num <= 69) {
        console.log("B+");
        grade = "B+";
    } else if (num >= 60 && num <= 64) {
        console.log("B");
        grade = "B";
    } else if (num >= 55 && num <= 59) {
        console.log("B-");
        grade = "B-";
    } else if (num >= 50 && num <= 54) {
        console.log("C+");
        grade = "C+";
    } else if (num >= 45 && num <= 49) {
        console.log("C");
        grade = "C";
    } else if (num >= 40 && num <= 44) {
        console.log("D");
        grade = "D";
    } else if (num >= 0 && num <= 39) {
        console.log("F");
        grade = "F";
    }

    if (grade) {
        document.write("<h1>Grade Result</h1>");
        document.write("Your Total Mark: " + num + "<br>");
        document.write("Your Grade: " + grade);
    }
}
