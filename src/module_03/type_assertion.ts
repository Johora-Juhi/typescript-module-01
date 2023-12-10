let emni: any;

emni = "Next level developer";

(emni as string).length;
<string>emni.length;

function kgToGram(param: string | number): string | number | undefined {
   if (typeof (param) === 'string') {
       const value = parseFloat(param) * 1000;
       return `Converted Result is ${value}`;
   }
   if (typeof (param) === 'number') {
       const value = param * 1000;
       return value;
   }
}


const resultToBeNumber = <number>kgToGram(3000)
const resultToBeString = <string>kgToGram('300')
const resultToBeStringg = kgToGram('300') as string;