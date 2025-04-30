// Write a program to print the marks of a student in an object using for loop.
// obj = { subrat: 89, varun: 90, sahil: 98}

let obj = {
    subrat: 89, 
    varun: 90, 
    sahil: 98
}
for(let i=0; i<obj.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[obj.keys]);
    
}

// write the program in Q1 using for in loop


for(let i in marks){
    console.log("The marks of" + key + "are" + marks[key])
}

// write a program to print "try again " until the user enters the correct number

let cn = 4;
let i 
while (i != cn) {
i = prompt("Enter a number")
console.log("Try again");

}
console.log("Yout have entered a correct number");

// write a function to find mean of 5 numbers.

const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
}
console.log(mean(4, 5, 6, 7));
