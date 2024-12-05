
const numbers = [4, 5, 6];

function myFunction(numbers) {
    let result = 1; 
    for (let i = 0; i <numbers.length; i++) {

        result *= numbers[i]; 
    }
    return result; 
}

const sum = myFunction(numbers);

console.log(sum);


