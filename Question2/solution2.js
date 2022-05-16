let numbers =  [2,46,378,362,83,1735,45,5,253,45]; //Random numbers
let sortedNumber = numbers.sort((a,b)=> b-a);
console.log(`Second largest number is ${sortedNumber[1]}`);

// O(nlogn)