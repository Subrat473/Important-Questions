//IIFE - Immedieately Invoked function expression is a function expression which is immedieately called as it is created.

// EX :- (function(){})();


// Why are we making it at first place ? 

// To create private variables 



var ans = (function () {
    var a = 12;
    return{
        getter: function() {
            console.log(a);
        },
        setter: function (prm) {
            a = prm;
            
        }
    }
})();

ans.getter();
ans.setter(35);


// agar function ke andar hum change and access karne ka code likhein or us code ko baahar bhej de to baahar se bhi change kar payenge 
