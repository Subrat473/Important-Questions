// Lanbda Functions 

// Javascript mein lambda functions hi fat (arrow functions hai). 

() => {

}



// Temporal dead zone 

// vars ki help se hum pahle JavaScript mein variables banate the.

// let and const ki entery se ek naya concept aaya hai uska naam hai Temporal dead Zone 


console.log(a);
let a = 12;







// currying 


// jab bhi humaare pass ek aisa function hoga jismein ek se jyada parameters aa rahe ho, to hum use "simplify" kar dete hai, us function jismein ek se jyada parameters hai, use kai saare functions ki series mein tod do, aur har function return kar raha hai ek naya function jo ki purane functions ke functions ke parameter ko use karega.

function calculate(a,b){
    console.log(a + b);
}

calculate(12,13)




//pure functions 
// aisa koi bhi function jo ki global variable ki value ko change na kare

function abcd(a){
    console.log(a + 3);
    
}


function abcd2(){
    global++;
}

function abcd3(){
    console.log(Math.random()*a);
}