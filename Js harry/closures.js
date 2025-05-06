// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.


function returnFunc(){
const x = () => {
    let a = 1
    console.log(a)
    const y = () => {
        let a = 2
        console.log(a);
        const z = () => {
            let a = 3
            console.log(a)
        }
    }
    y()
}
x()
return x
}
let a = returnFunc()
a()



