// Map method - Creates a new array by performing some operatio on each array.

// let arr  = [45, 23, 54]
// //console.log(arr)
// arr.map(() => {
//     console.log(value);
    
// })
// console.log(arr);


// filter() - Filters an array with values that passes a test creates a new array

let arr2 = [434, 54, 4, 0, 1, 3]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2);


// reduce

let arr3 = [1, 2, 4, 6, 4, 50]
let newarr3 =   arr3.reduce((h1, h2) => {
        return h1 + h2
    })
console.log(newarr3);
