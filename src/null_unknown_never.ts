const searchName=(value: string | null) => {
    if (value === null) {
        console.log('There is nothin to search');
    } else {
        console.log('Searchin');
    }
}
searchName('juhi')
searchName(null)

// "strictNullChecks": true,(tsconfi.json)  we can set it to false if dont want to check null strict type                       /* When type checking, take into account 'null' and 'undefined'. */

const carSpeed = (speed: unknown) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600
        console.log(`My speed is ${convertedSpeed}`);
    } else if(typeof speed === 'string') {
        const [value, unit] = speed.split(' ');
        const convertedSpeed = (parseFloat(value) * 1000) / 3600
        console.log(`my speed is ${convertedSpeed}`);
    }
}
carSpeed(10);
carSpeed('10 km/h')
// unknown it will take any type

function throwerror (message: string): never {
    throw new Error(message);
}
throwerror('helu')