// What's the difference between .call and .apply in JavaScript?
// .call and .apply are both used to invoke functions with a specific this context and arguments. The primary difference lies in how they accept arguments:

.call(thisArg, arg1, arg2, ...): Takes arguments individually.
.apply(thisArg, [argsArray]): Takes arguments as an array.
Assuming we have a function add, the function can be invoked using .call and .apply in the following manner:

function add(a, b) {
  return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
