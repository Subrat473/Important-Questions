//  Implement a deep clone of an object


function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);

  const cloned = {};
  for (let key in obj) {
    cloned[key] = deepClone(obj[key]);
  }
  return cloned;
}


// This handles deep copying objects and arrays by recursively cloning nested structures.

// Array.isArray() is used to distinguish between arrays and plain objects.

// typeof obj !== 'object' filters out primitive values.

// Why important? Interviewers test your understanding of memory management and object references in JS.

