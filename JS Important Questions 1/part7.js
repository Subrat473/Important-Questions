//Slice and splice

// Slice - array ke kisi part ko nikaal ke dega 1,2,3,4,5,6,7


var arr = [1,2,3,4,5,6];
console.log(arr.slice(1,3));


// aisa koi bhi operation jisse array ki value change ho jaaye use mutable and jisse array ki value same rahe use kahte hai immutable


//splice - array ke kisi hisse ko hata dega

var arr = [1,2,3,4,5,6,7];
arr.splice(2,2);
