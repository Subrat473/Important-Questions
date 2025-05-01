// Loops 



// for loop

 let num = [3, 43, 5, 7, 3]
// for(let i=0; i<num.length; i++){
//     console.log(num[i]);
    
// }

// for each loop
num.forEach((Element) => {
    console.log(Element*Element)
    
})


// array.from

let name = "Subrat";
let arr = Array.from(name);
console.log(arr);


// for....of

for (let i of num){
    console.log(i);
}

// for...in

for (let i in num){
    console.log(i);
    
}