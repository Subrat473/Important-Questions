// Console Object. - n JavaScript, objects are data structures used to store related data collections as key-value pairs. Each key is a unique identifier for the associated value, and objects can contain properties and methods. Properties are key-value pairs that can store various data types, including strings, numbers, and Booleans, while methods are functions defined within the object.

const person = {
    name: "John",
    age: 20
};

// Properties in an object can be accessed using either dot notation or bracket notation. Dot notation is used as follows:

console.log(person.name); 

// Bracket notation is used as follows:

console.log(person["name"]); 

// Properties can be modified by reassigning their values, and new properties can be added dynamically using dot or bracket notation. For example:

person.age = 25; // Modifying an existing property
person.city = "New York"; // Adding a new property