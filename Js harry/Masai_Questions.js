
// for(let i = 10; i>=1; i--){
//     console.log(i);
// }






// Print the sum of the first 10 natural numbers.
// i.e 1 + 2 + 3 + ....+10



// let sum = 0;

// for(let i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log("The sum of the number is ", sum);






// write a function named addNumbers which takes two numbers as input and return their sum

// function add(x, y)
// {
//     let sum = x + y;
//     return sum; 
// }

// var a = add(3,4);
// console.log(a);





// Write code to find the absolute difference of two numbers                                       Sample Input- 1 12 4      Sample output- 1 8     Sample Input- 2 4, 18     Sample output- 2 14


// function absolute(first, second){
//     let diff = first - second;
//     if(diff < 0)
//     {
//         diff = diff + -1;
//     }
//     return diff;
// }

// let result = absolute(4, 2);
// console.log(result);



function idOdd(x)
{
    if(x%2 !=0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(isOdd(4));
console.log(isOdd(5));


let limit = 100;
for(let i = 0; i<=100; i++)
{
    if(idOdd(i))
    {
        console.log(i, "is odd");
    }
    else
    {
        console.log(i, "is odd");
        
    }
}

