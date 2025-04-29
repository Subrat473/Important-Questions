// REVERSE A STRING

function reverseString(string) {
    console.log(string.split("").reverse().join(""));
}
reverseString("Automation");

// Check for Palindrome 

function Palindrome(data){
    let result = (data == data.split("").reverse().join("")) ?"Yes it is a palindrome":"No it is not a palindrome";
    return result;
};
console.log(Palindrome("233"));


// Fibonacci Series 

function toGetFibonacci(n) {
    let fibseries=[0,1];
    for(let i=2; i<n; i++){
        fibseries.push(fibseries[i-1]+fibseries[i-2]);
    }
    return fibseries.slice(0,n);
}
console.log(toGetFibonacci(4)); 


// Factorial Of a Number 

function toGetFactorial(n,Factorial=1){
    if(n<0) return "Factorial is undefined for negative integers";
    for(let i = 1; i<n; i++) {
        Factorial*i;
    }
    return Factorial;
};
console.log(toGetFactorial(5));



// Prime Number Check 

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
        return true;
    }
}

console.log(isPrime(16));
console.log(isPrime(3));
