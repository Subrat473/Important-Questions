// // Explain how this works in JavaScript
// There's no simple explanation for this; it is one of the most confusing concepts in JavaScript because it's behavior differs from many other programming languages. The one-liner explanation of the this keyword is that it is a dynamic reference to the context in which a function is executed.

// A longer explanation is that this follows these rules:

// If the new keyword is used when calling the function, meaning the function was used as a function constructor, the this inside the function is the newly-created object instance.
// If this is used in a class constructor, the this inside the constructor is the newly-created object instance.
// If apply(), call(), or bind() is used to call/create a function, this inside the function is the object that is passed in as the argument.
// If a function is called as a method (e.g. obj.method()) — this is the object that the function is a property of.
// If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In the browser, the global object is the window object. If in strict mode ('use strict';), this will be undefined instead of the global object.
// If multiple of the above rules apply, the rule that is higher wins and will set the this value.
// If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created.
// For an in-depth explanation, do check out Arnav Aggrawal's article on Medium.


// Read the detailed answer on GreatFrontEnd which allows progress tracking, contains more code samples, and useful resources.