// Q1 write a JavaScript function to check an `input` is an array or not.


// 1st Way

function checkArray(inp){
    Array.isArray(inp);
}


console.log(checkArray(1));
console.log(checkArray({}));
console.log(checkArray([1,2,3]));

// 2nd Way

// whenever we create an array it is always given a blueprint or an instance which is Array.

function checkArray(inp){
    return inp instanceof Array;

}

console.log(checkArray([1,2,3,4]));
console.log(checkArray(1));
console.log(checkArray("harsh"));




// Q2 Wrtie a Js function to clone an array. 

function cloning(inp){
    var cloned = [...inp];
    return cloned;
}
console.log(cloning([1,2[6,7],3,4]));


// Q3 Write a Js Function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 

function getter(inp, get = 1){
    var cloned = [];
    for(var i = 0; i<get; i++){
        cloned.push(inp[i]);
    }
    return cloned;

}

console.log(getter([1,2,3,4,5,6]));


// Q4 Write a simple Js Program to join all elements of the following array into a string.

function joiner(){
    return inp.join(",");

}

console.log(joiner(["apple", "banana", "guava", "cat", "piplani"]));


