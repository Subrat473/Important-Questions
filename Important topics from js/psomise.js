// Implement Promise.all()

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [], count = 0;
    if (promises.length === 0) return resolve([]);

    promises.forEach((p, i) => {
      Promise.resolve(p).then(res => {
        results[i] = res;
        count++;
        if (count === promises.length) resolve(results);
      }).catch(reject);
    });
  });
}



// Accepts an array of promises and resolves when all are done, or rejects if any fails.

// Maintains order of results using index i.

// This checks your knowledge of asynchronous control, Promise, and error handling.