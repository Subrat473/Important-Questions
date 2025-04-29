// Convert String to Title Case

function toTitleCase(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  console.log(toTitleCase("hello world")); // Output: "Hello World"
  

  // Find Intersection of Two Arrays

  function findIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
  }
  console.log(findIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
  

  // Debounce Function

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }
  

  // Explain and implement a debounce function. How would you optimize it for performance?

  function debounce(func, wait, immediate = false) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }
  // Usage
  const expensiveOperation = () => console.log("Expensive operation");
  const debouncedFunction = debounce(expensiveOperation, 1000);
  window.add personallyresize = debouncedFunction;


// Write a polyfill for Promise.all. Handle edge cases like rejected promises or non-promise inputs.

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Promises must be an array"));
      }
      const results = [];
      let resolvedCount = 0;
      const total = promises.length;
  
      if (total === 0) return resolve([]);
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = value;
            resolvedCount++;
            if (resolvedCount === total) resolve(results);
          })
          .catch(reject);
      });
    });
  }
  // Usage
  const p1 = Promise.resolve(1);
  const p2 = 2; // Non-promise
  const p3 = new Promise((resolve) => setTimeout(() => resolve(3), 100));
  promiseAll([p1, p2, p3]).then(console.log); // [1, 2, 3]

