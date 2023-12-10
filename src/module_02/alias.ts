type CrushType = {
    name: string,
    age?: number,
    profession: string,
    address: string
}

const crush1: CrushType = {
    name: 'jinka',
    age: 28,
    profession: "bekar",
    address: "jani na"
}

const crush2: CrushType = {
    name: 'tinka',
    age: 28,
    profession: "bekar",
    address: "jani na"
}

type MarriedType = boolean;

const isCrushMarried: MarriedType = false;

type NameType = string

const courseName: NameType = 'Next level'

type OperationType = (x: number, y: number) => number

const calculate = (
    number1: number,
    number2: number,
    operation: OperationType
) => {
    return operation(number1,number2)
}

console.log(calculate(10, 20, (x, y) => x + y)); 
console.log(calculate(10, 20, (x, y) => x - y)); 
console.log(calculate(10, 20, (x, y) => x * y)); 
