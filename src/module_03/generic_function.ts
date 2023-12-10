const createArray = (param: string): string[] => {
    return [param]
}
const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2]
}
function createArray2 <X, Y>(param1: X, param2: Y): [X, Y]{
    return [param1, param2]
}

const result1 = createArray1<string, string>('Ban', 'kichu');
const result2 = createArray1<boolean, string[]>(false, ['kichu']);

type Name = { name: string }

const result3 = createArray1<Name, boolean>({ name: "Ban" }, false)

//spread operator === in this case we should use generic type..coz otherwise the object is spread at compile time..so in this case we should use generic type

const addMeToMyCrush = <T>(myInfo: T) => {
    
    const crush = "Robert Patinson"
    const newData = { ...myInfo, crush }
    return newData
}
const myInfo = {
    name: "Juhi",
    age: 25,
salary: 500
}
const result4 = addMeToMyCrush(myInfo);
