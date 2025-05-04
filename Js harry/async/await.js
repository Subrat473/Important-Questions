// Async/Await - There is a special syntax to work with promises in javascript.
//  A function can be made async by using async keyword like this :

  // An Async function always returns a promise. Other values are wrapped in a promise automaically.


//   async function Subrat() {
//     return 5;
    
//   }

//   Subrat().then((x) => {
//     alert(x)
//   })



  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  }
  
  fetchData();