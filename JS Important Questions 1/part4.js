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






// filter  -  filter ka bhi exact structre map ki tarah hai 
// iska matlab filter bhi return karega
// ab return jo hoga wo har haalat mein ek boolean hona chahiye 
// map jo retrun karta tha wo hi directly save hota tha imaginary array mein 
// par filter kyunki boolean return kar raha hai to boolean save nahi hoti balki boolean ki jagah jo us waqt value chal rahi hoti hai wo save hoti hai 


var arr = [1,2,3,4,5,6];

arr.filter(function(val){
    return 1 < 2;
})


var ans = arr.filter(function(val){
    if (val % 2 === 0 ) {
        return this;
    }
})


// array mein jitne bhi naam aise hain jinme (a) aa raha ho aise nammon ko hata do

var arr = [ "mohita","anurag", "jaanardhan", "saumesh" ];

var ans = arr.filter(function(val){
    return !val.includes("a")
})


// aise naamo ko remove karo jinme 2 ya 2 se jyada baar (a) aa raha ho

var arr = ["harsh", "abhay", "sumit", "anushka", "radhika"]

var ans = arr.filter(function(val){
    if(val.split("a").length <=2) return true;
})