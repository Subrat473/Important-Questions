// Promises - The solution to the callback hell is promises. A promise is a "promise of code execution". The code either executes or fails, in both the cases the subscriber will be notified.

// The Syntax of a promise looks like this :

// let promise = new promise (function (resolve, reject){
//     //executor
// });

let promise = new Promise(function(resolve, reject){
    alert("Hello")
    resolve(56)
})
console.log("Hello");

setTimeout(function() {
    console.log("Hello in 2 seconds")
}, 2000);
console.log("my name is " + "Hello Three");
console.log(promise);
