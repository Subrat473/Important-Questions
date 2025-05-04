// callback() -  A callback function is a function passed into another function as an arguement, which is then invoked inside the outer function to complete an action.

// callbacks 

function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();