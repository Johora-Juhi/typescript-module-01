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

// spread oparetor
const myFriends = ['chandler', 'joey', 'ross']
const newFriends = ['monica', 'pheobe', 'rachel']

myFriends.push(...newFriends);
console.log(myFriends);

// array and object destructuring
const [bestfriend] = myFriends;
console.log(bestfriend);

// [bestfriend] is an example of array destructuring.
// It's extracting the first element of the myFriends array and assigning it to the variable bestfriend.

const myBestFriend = {
    fullName: 'helu',
    age: 24
}

const { fullName: myFullName } = myBestFriend;
// we can not specify the datatype while destructuring, it will counted as alias
console.log(myFullName);

// rest operator oposite spread operator

const greetings = (...friends: string[]): void => friends.forEach(friend => {
    console.log(`Hi ${friend}`);
});

greetings('hashem', 'kashem', 'tashem', 'helu');