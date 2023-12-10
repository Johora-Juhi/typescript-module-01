const user1 = {
    company:"programming hero",
    name: "abul",
    age: 88,
    isMarried: true,
    wife:'juhi'
}
const user2 : {
    company: String;
    name: String;
    age: Number;
    isMarried: Boolean;
    // if any property can be or not avaiable in the object 
    // literal types 
    wife?:String
} = {
    company:"programming hero",
    name: "abul",
    age: 88,
    isMarried: true,
    wife:'juhi'
}
// if we want any property value to be fixed
const user3 : {
    // company: "programming hero";
    // or
    readonly company: string;
    name: String;
    age: Number;
    isMarried: Boolean;
    wife?:String
} = {
    company:"programming hero",
    name: "abul",
    age: 88,
    isMarried: true,
    wife:'juhi'
}