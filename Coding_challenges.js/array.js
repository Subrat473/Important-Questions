// Write a function that finds the second largest number in an array. 

function findSecondLargest(arr) { 

  arr.sort((a, b) => b - a); 

  return arr[1]; 

} 




// Implement a function that merges two arrays into a single array, alternating elements from each array. 


function mergeArrays(array1, array2) { 

  const mergedArray = []; 

  const maxLength = Math.max(array1.length, array2.length); 

  for (let i = 0; i < maxLength; i++) { 

    if (i < array1.length) mergedArray.push(array1[i]); 

    if (i < array2.length) mergedArray.push(array2[i]); 

  } 

  return mergedArray; 

} 


// Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array. 


function removeFalsyValues(arr) { 

  return arr.filter(Boolean); 

} 



//  Implement a function that returns the average value of numbers in an array. 


function calculateAverage(numbers) { 

  let sum = 0; 

  for (let number of numbers) { 

    sum += number; 

  } 

  return sum / numbers.length; 

} 


// Implement a function that finds the maximum number in an array. 


function findMaxNumber(arr) { 

  let max = arr[0]; 

  for (let i = 1; i < arr.length; i++) { 

    if (arr[i] > max) { 

      max = arr[i]; 

    } 

  } 

  return max; 

} 