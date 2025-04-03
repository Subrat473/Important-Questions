// map - jab aapko array ke har member par koi operation perform karna ho or har member par operation perform karne ke baad usey ek naye array mein daalna hai tab hum use karte hain map ko 

var arr = [1,2,3,4,5];


var ans = arr.map(function(val){
    return "hello";
})


// map ka structue bilkul foreach ki tarah hai
// extra cheej ye hai ki map return maangta hi hai 
// return jo karoge wo ek imaginary array mein store hota jayega 
// end me jab map khatam hoga to map us imaginary array ko aapko waapus kar dega to aap use naye variable mein save karlo 

var ans = arr.map(function(val){
    return "hello";
})


// Q Ek array se ek naya array banao jsimein agar word ki length 5 akshar ho to p tag mein daalo nahi to word ko span tag mein daalo 

var arr = ["hello", "a", "apple", "guava", "harsh", "nishi"];

arr.map(function(val){
    if(val.length === 5) return `<p>${val}</p>`;
    else return `<span>${val}</span>`
})



// ek array of object hai or s array mein hum logon ke pass kaafi data hai usse ek array banao jismein sirf naam ho 

var arr = [ 
    {name: "harsh", age: 24 },
    {name: "harshita", age: 22 },
    {name: "harshita ka bf", age: 25},
]

var ans = arr.map(function(val){
    return val.name;
});











// filter  -  filter bhi exact structre map ki tarah hai 