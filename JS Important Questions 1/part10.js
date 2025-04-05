// Q :- Given a string, reverse each word in the sentence. 


var str = " saare jahan se accha hindustaan humara ";


var savedstr = str.split(" ")
.map(function(word){
    return word.split("").reverse().join("")
})

console.log(savedstr.join(" "));



// Q2 :- How to check if an object is an array or not? Provide some code.

function checkArray(elem){
    return Array.isArray(elem);
}
console.log(checkArray([]));
console.log(checkArray({}));


// Q3 :- How to empty an array in JavaScript ? Do not reset it to a new array, and do loop through to pop each value.


var arr = [1,2,3,4,5,6,7];

arr.length = 0;



// Q4 :- How would you check if a number is a integer?

var a = 12; 

if (a % 1 === 0){
    console.log("integer");
    
}else{
    console.log("not !");
    
}


// Q5 :- Make this work: 
// duplicate ([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr){
   return arr.concat(arr);

}

console.log(duplicate([1,2,3,4,5]));



// Q6 :- Write a JavaScript Function that reverse a number 

function reverseKaro(num){
   Number( num.toString().split("").reverse().join("") );

}
reverseKaro(12);

function reverseKaro(num){
    var rev = 0; 
    while(num>0){
        var rem = num%10;
        num = Math.floor(num/10)
    }

}




// Q7 :- Write a JavaScript function that checks whether a passed string is palindrome or not.


function stringPalChecker(str) {
    var reversed = str.split("").reverse().join("");
    return reversed === str;
}

console.log(stringPalChecker("poop"));
console.log(stringPalChecker("loop"));


// Q8 :- Write a JavaScript Function that returns a passed string with letters on alphabetical order. 

function stringAlphaBeticalOrder(str){
    return str.split("").sort().join("");
}
console.log(stringAlphaBeticalOrder("apple"));
console.log(stringAlphaBeticalOrder("harsh"));


//Q9 :- Write a JavaScript Function that accepts a string as a parameter and converts the first letter of each word the string in upper case.


// harsh bhai kaise ho 
// HARSH BHAI KAISE HO

function capitalizekaro(str){
    str.split(" ").map(function(word){
        word.charAt(0).toUpperCase() + word.substring(1)
    })
    return allwords.join(" ");
}

console.log(capitalizekaro("harsh bhai kaise ho"));
console.log(capitalizekaro(""));


//Q10 :- Write a JavaScript function to get the number of occurrencess of each letter in specified string 

function occ(str) {
    var occurrencess = {};
    str.split("").forEach(function (elem) {
        if (occurrencess.hasOwnProperty(elem) === false){
            occurrencess[elem] = 1;
        } 
        else {
            occurrencess[elem]++;
        }
    })

    return occurrencess;
}

console.log(occ("apple"));
console.log(occ("Harsh"));




