let a = 5;
let b = '5';

if (a == b) {
  console.log('Equal');
} else {
  console.log('Not Equal');
}


// Explanation: The == operator performs type coercion, converting both operands to the same type before comparison. Here, '5' is coerced to a number, making the comparison 5 == 5, which evaluates to true. To avoid such issues, it’s recommended to use the strict equality operator ===, which checks both value and type without coercion.