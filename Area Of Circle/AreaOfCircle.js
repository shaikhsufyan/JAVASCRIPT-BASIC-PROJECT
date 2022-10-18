// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// AreaofCircleFormula=pi*r*r; pi=3.14

let pi=3.14;
 
// let Formula=pi*r*r;

// console.log(Formula);

// Circumference of circle

let rd=prompt("Enter the value of radius of circumference")
let circumference=2*pi*rd;
console.log(circumference);
document.getElementById("value").innerHTML="The value of radius of circumference is "+circumference;
