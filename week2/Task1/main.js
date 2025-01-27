const numbers = [5, 2, 9, 1, 7, 3];


function findMax(numbers){
    return Math.max(...numbers);
}

function findMin(numbers){
    return Math.min(...numbers);
}

let maxnum = findMax(numbers);
let minnum = findMin(numbers);

console.log(`Largest number: ${maxnum}`);
console.log(`Smallest number: ${minnum}`);



/*anothor solution */


numbers.sort((x, y) => x - y);

console.log(`Largest number: ${numbers[numbers.length-1]}`)
console.log(`Smallest number: ${numbers[0]}`)