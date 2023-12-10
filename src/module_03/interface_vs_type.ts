type User = {
    name: string,
    age: number
 }
 
 type ExtendUser = User & {
    role: string
 }
 
 interface IUser {
    name: string,
    age: number
 }
 
 interface IExtendUser extends IUser {
    role: string
 }
 
 const UserWithTypeAlias: User = {
    name: 'Dipra',
    age: 24
 }
 
 const ooser: IExtendUser = {
    name: 'Ju',
    age: 46,
    role: 'bos'
 }
 
 
 type addNumbersType = (num1: string, num2: string) => string;
 const addNumbers: addNumbersType = (num1, num2) => num1 + num2;
 
 
 type rollNumberType = number[];
 
 
 interface IRollNumbers {
    [index: number]: number
 }
 
 
 const rolllNumber: IRollNumbers = [1, 2, 3]