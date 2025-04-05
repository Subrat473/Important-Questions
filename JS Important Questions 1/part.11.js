// Loops

// Q1 :- Loop an array and add all members of it. 

var arr = [1,2,3,4,5,6,7]; 
var sum = 0;

arr.forEach(function(elem){
    sum = sum + elem;

})

// Q2 :- In an array of numbers and strings, only add those members which are not strings.

var arr = ["hehehe", 123, "hghc", "ahdfd", "ahadfg", 3, 4 ];

arr.forEach(function (elem) {
    if(typeof elem === 'number'){
        sum = sum + elem;
    }
})

console.log(sum);


// Q3 :- Loop an array of objects and remove all objects which don't habe gender's value male.

var arr = [
    {name: "harsh", gender: "male"},
    {name: "harshita", gender: "female"},
    {name: "khusi", gender: "female"},
    {name: "abcd", gender: "male"},
    {name: "hulululu", gender: "male"},
]

var newarr = arr.forEach(function(elem){
    return elem.gender === "male";
})

arr = newarr;