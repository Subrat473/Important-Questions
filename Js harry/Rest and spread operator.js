// Example Rest 

function addNumbers(a,b,c,...other){
    console.log(other);
    
   return a+b+c;
}
const res = addNumbers(2,3,4,4,54,4)
console.log(res);



// Spread Operator

var names = ["Ajay","anuj", "Vivek"]
function getNames(name1, name2, name3){
      console.log(name1,name2);
      
}
getNames(...names)