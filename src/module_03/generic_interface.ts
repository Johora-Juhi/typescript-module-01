
type GenericTuple1<X, Y> = [X, Y];

interface IRelationWithSalary{ name: string, salary: number }


const relationWithSalary1: GenericTuple1<IRelationWithSalary, string> = [
    {
        name: 'Shreya',
        salary: 40
    },
    "Sumit"
 ]
 
interface CrushInterface<T, U = null> {
    name: string,
    husband: T,
    wife?: U
 }
 
 
 interface PersonInterface {
    name: string,
    age: number
 }
 
 
 const crush4: CrushInterface<PersonInterface, PersonInterface> = {
    name: "Dipra",
    husband: {
        name: 'X',
        age: 30
    },
    wife: {
        name: 'Y',
        age: 20
    }
 }
 