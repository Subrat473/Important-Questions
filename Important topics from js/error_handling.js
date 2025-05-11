// Error handling, "try...catch"
// No matter how great we are at programming, sometimes our scripts have errors. They may occur because of our mistakes, an unexpected user input, an erroneous server response, and for a thousand other reasons.

// Usually, a script “dies” (immediately stops) in case of an error, printing it to console.

// But there’s a syntax construct try...catch that allows us to “catch” errors so the script can, instead of dying, do something more reasonable.

// The “try…catch” syntax
// The try...catch construct has two main blocks: try, and then catch:



try {

  // code...

} catch (err) {

  // error handling

}

// another example

try {

  alert('Start of try runs');  // (1) <--

  // ...no errors here

  alert('End of try runs');   // (2) <--

} catch (err) {

  alert('Catch is ignored, because there are no errors'); // (3)

}