const isAuthenticated = null;
const userName = isAuthenticated ?? "Guest";
const userName2 = isAuthenticated ? isAuthenticated : "Guest";


console.log({ userName }, { userName2 });


type Manush = {
   name: string,
   age: number,
   address: {
       city: 'No City',
       road: 'no Road',
       home?: ''
   }
}


const manush1: Manush = {
   name: 'juhi',
   age: 20,
   address: {
       city: 'No City',
       road: 'no Road'
   }
}


const home = manush1?.address?.home ?? 'No Home';
console.log({ home });