class Fish{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayName(){
        return `Hi, my name is ${this.name}`
    }
}

// const redFish = new Fish("Red", 4)
// console.log(redFish.sayName())


class Square{
    constructor(sideLength){
        this.sideLength = sideLength
    }
    area = ()=>{
        return this.sideLength * this.sideLength
    }
    perimeter = ()=>{
        return this.sideLength * 4
    }
}

const square = new Square(5)

// console.log(`Side Length: ${square.sideLength}`)
// console.log(`Area: ${square.area()}`)
// console.log(`Perimeter: ${square.perimeter()}`)


class Rectangle{
    constructor(length, width){
        this.length = length
        this.width = width
    }
    logDimensions = ()=>{
        return `Length: ${this.length}, width: ${this.width}`
    }
    area = ()=>{
        return this.length * this.width
    }
    perimeter = ()=>{
        return 2*(this.length + this.width)
    }
}

// const rectangle = new Rectangle(5,10)
// console.log(rectangle.logDimensions())
// console.log(rectangle.area())
// console.log(rectangle.perimeter())


/*Private Properties*/


// class Transaction {
//     constructor(amount, date, memo){
//         this.amount = amount;
//         this.date = date;
//         this.memo = memo;
//     }
// }

// const transaction = new Transaction(100.24, "03/04/2023", "Grocery Shopping")
// console.log(transaction.amount)

// transaction.amount = 10000
// console.log(`New Amount: ${transaction.amount}`)


// To make the private object properties remain private:
class Transaction {
    // Declare the private fields.
    #amount;
    #date;
    #memo;
    constructor(amount, date, memo){
        this.#amount = amount
        this.#date = date
        this.#memo = memo
    }
}

const transaction = new Transaction(100, "11/08/2023", "Food items")
console.log(transaction)