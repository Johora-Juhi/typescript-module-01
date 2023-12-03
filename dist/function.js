"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => num1 + num2;
const numbers = [1, 5, 9];
const newArray = numbers.map((number) => number * number);
const user = {
    name: "juhi",
    balance: 0,
    addBalance(money) {
        // arrow funtion er moddhe this operator use kora jai na 
        return `Curent balance is ${this.balance + money}`;
        // jodi amra return na kore console korte chai taile return type void di dile hobe  
    }
};
