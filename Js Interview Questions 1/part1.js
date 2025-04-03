// array - foreach map filter

var a = [3,5,'3',4];
// Foreach is a loop which works on arrays
a.forEach(function(val){
    console.log(val+2);
    
})

// Foreach ka use karke ek array ke saare members ke aage hello print karao
a.forEach(function(val){
    console.log("Hello," + val);
    
})


// array ke saare members print karo aur unhe chhod do jo ki 4 se bade ho

a.forEach(function(val){
    if(val <= 4) {
        console.log(val);
        
    }
})

// saare elements jo ki array me hain unka sum karo
var sum = 0;
a.forEach(function(val){
    sum = sum + val;
})

// Saare bande add karo or agar unme se koi bhi string nikal jaye to fir use skip karo

var sum = 0;
a.forEach(function(val){
    if(typeof val === "number"){
        sum = sum + val;
    }
})

console.log(sum);


var arr = [];


for (var i = 0; i < 10; i++) {
    arr.push(function () {
        setTimeout(function()  {
            console.log(i);   
        }, 1000);
    })
}

for (var i = 0; i < 10; i++) {
    arr[i]();
}


// synchronous code executes line by line and if first line is not resolved the code execution will not move to the next line 


// asynchronous code waits till synchronous code is not finished and when the synchronous code finises executing, then the async code means it probably can have osme delay, it also takes something called callback.







// freeze, this call apply bind