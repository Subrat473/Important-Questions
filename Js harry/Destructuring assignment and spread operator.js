// Destructuring assignment is used to unpack values from an array, or properties from objects, into distinct variable.




  let arr = [ 3,5,5,4,3,7,65,4]


//no need to do this:
// let a = arr[0]
// let b = arr[1]
// let [a, b, c, d,  ...rest] = arr
// console.log(a,b,c,d, rest)
// let [a, ,b, ...rest] = arr
// console.log(a, b, rest)

let { a, b } = {a: 1, b: 5}
console.log(a, b);




// Spread operator

let arr1 = [4,3,34,4534,3,34,5]
let obj1 = { ...arr1 }
console.log(obj1);

function sum(v1, v2, v3){
    return v1 + v2 + v3
}
console.log(sum(...sum(arr1)));


