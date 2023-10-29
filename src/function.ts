function add(num1: number, num2: number): number{
    return num1+num2
}
const addArrow = (num1: number, num2: number): number => num1 + num2

const numbers = [1, 5, 9]
const newArray = numbers.map((number: number): number => number * number)

const user: {
    name: string;
    balance: number;
    addBalance(money:number):string
} = {
    name: "juhi",
    balance: 0,
    addBalance(money: number): string {
        // arrow funtion er moddhe this operator use kora jai na 
        return `Curent balance is ${this.balance + money}`
        // jodi amra return na kore console korte chai taile return type void di dile hobe  
    }
}