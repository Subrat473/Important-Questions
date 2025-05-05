 const sayhello = (name) => console.log("Hello", name);
 sayhello("subrat")

 const x = {
    name: "Subrat",
    age: 43,
    exp: 43,
    show: ()=>{
        console.log(`The name is $(this.name)`)
    }
 }
 x.show()