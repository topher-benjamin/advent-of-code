// 12 red cubes, 13 green cubes, and 14 blue cubes

// sum the IDs of all the possible configurations


// import the list of cubes

import fs from 'fs';

const totals = {
    'red': 12,
    'green': 13,
    'blue': 14
}


function partOne(file){
    const input = fs.readFileSync(file, 'utf8');
    
    const lines = input.split('\n');
    
    let possibleConfigurations = 0;
    for(let i = 0; i< lines.length; i++){
        let possible = true;
        // console.log('line', lines[i], i)

        const gameValues = lines[i].split(':');
        const sets = gameValues[1].split(/[;,]+/);

        // here is some ugly logic to check which set is which...
        for(let set of sets){
            if(set.includes('red')){
                set = set.replace('red', '').trim();
                if(set > totals.red) possible = false;
                // console.log('set', set, totals.red)
            }
            if(set.includes('green')){
                set = set.replace('green', '').trim();
                if(set > totals.green) possible = false;
                // console.log('set', set, totals.green)
            }
            if(set.includes('blue')){
                set = set.replace('blue', '').trim();
                if(set > totals.blue) possible = false;
                // console.log('set', set, totals.blue)
            }
        }

        if(possible){
            console.log('possible', i+1)
            possibleConfigurations += i+1;

        } 

    }
    return possibleConfigurations;
}


// console.log(partOne('./input.txt'));

function partTwo(file){
    const input = fs.readFileSync(file, 'utf8');
    
    const lines = input.split('\n');
    let power = 0;

    for(let i = 0; i< lines.length; i++){
        // console.log('line', lines[i], i)
        
        const gameValues = lines[i].split(':');
        const sets = gameValues[1].split(/[;,]+/);
        let [red, green, blue] = [0,0,0];
        
        // here is some ugly logic to check which set is which...
        for(let set of sets){
            // console.log('set', set)
            if(set.includes('red')){
                set = set.replace('red', '').trim();
                if(+set > red){
                    red = set;
                    // console.log('greater than red value',red,set)
                }
            }
            if(set.includes('green')){
                set = set.replace('green', '').trim();
                if(+set > green){
                    green = set;
                    // console.log('greater than green value',green,set)
                }
            }
            if(set.includes('blue')){
                set = set.replace('blue', '').trim();
                if(+set > blue){
                    blue = set;
                    // console.log('greater than blue value',blue,set)
                }
            }
        }

        // console.log('colors', red, green, blue);

        // console.log('line power = ', red*green*blue);
        power = power + red*green*blue;

    }
    return power;
}

console.log(partTwo('./input.txt'));
