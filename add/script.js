
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log("Even numbers:");
for (let i = 0; i < numbers; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}


let sum = 0;
for (let i = 0; i < numbers; i++) {
    sum += numbers[i];
}

console.log("Sum of all numbers:", sum);










