// Creating a person object.
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHello = ()=>{
        console.log(`Hello, my name is ${this.name}`)
    }
    sayAge = ()=>{
        console.log(`I am ${this.age} years old!`)
    }
    haveBirthday = (age)=>{
        console.log(`It is my birthday`)
        this.age +=1;
    }
}

let joel = new Person('Joel', 24)
joel.sayHello()
joel.sayAge()
joel.haveBirthday(24)