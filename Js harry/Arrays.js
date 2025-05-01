// In JavaScript, arrays are a special type of object used to store and manage multiple values in a single variable. Think of them as ordered collections where you can keep a list of items like numbers, strings, objects, or even other arrays!


// let marks_12th = [ 44, 65, 75, 45, null];
// console.log(marks_12th);


// Array Methods

// let num = [1, 2, 43, 43, 454]
// let b = num.toString();
// console.log(b);
// console.log(typeof(b));

// let c = num.join(" and ");
// console.log(c, typeof c);


// pop method - pops the element

// num.pop()
// console.log(num);

// push method - push returns the new array length

// let r = num.push(545);
// console.log(num, r);


// shift method - remobes an element from the start of the array
// let f = num.shift()
// console.log(f);


// unshift - adds element to the beginning returns new array length.

// let r = num.unshift()


// delete is an operator not a method.

let num = [1,2,3,4,5,6,7,8,9]
let num1 = [5,4,44,3,45,6,4,4]
// delete num[0]
// console.log(num);


// concat() - to add more than one value 

let newArray = num.concat(num1)
console.log(num, num1);


// sort 

num.sort();
console.log(num);

