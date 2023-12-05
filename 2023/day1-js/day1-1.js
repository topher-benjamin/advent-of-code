console.log("Hello world!")

``

const fs = require('fs');
const readline = require('readline');

const readInterface = readline.createInterface({
    input: fs.createReadStream('day1-input.txt'),
    // output: process.stdout,
    console: false
});

let total = 0;
readInterface.on('line', function(line) {
    console.log(line);
    const firstDigit = line.matchAll(/(\d)/g).next().value[0];
    console.log(firstDigit);
    const lastDigit = line.split('').reverse().join('').matchAll(/(\d)/g).next().value[0];
    console.log(lastDigit);
    const num = parseInt(`${firstDigit}${lastDigit}`);
    console.log(num);
    total += num;

    console.log(total);
});


console.log(total);

// 54331
