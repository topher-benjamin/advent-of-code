import fs from "fs";

const spelledNumbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

// regex of all spelled numbers
const regex = new RegExp(Object.keys(spelledNumbers).join("|"), "g");

function getLinesFromFile(file) {
    return fs.readFileSync(file, "utf-8").trim().split("\n");
}

function partOne(lines) {
  const values = lines.map((line) => {
    console.log(line);
    let first = line.split("").find((v) => !Number.isNaN(Number(v)));
    let last = line.split("").findLast((v) => !Number.isNaN(Number(v)));
    console.log(first, last);
    return Number(first + last);
  });

  return values.reduce((a, b) => a + b, 0);
}

// console.log(partOne(getLinesFromFile("example-input.txt")));

function partTwo(lines) {
    const values = lines.map((line) => {
        line = replaceNumberWords(line);
        console.log(line);
        let first = line.split("").find((v) => !Number.isNaN(Number(v)));
        let last = line.split("").findLast((v) => !Number.isNaN(Number(v)));
        console.log(first, last);
        return Number(first + last);
      });
    
      return values.reduce((a, b) => a + b, 0);
}

function replaceNumberWords(line) {
    return line
      .replaceAll("zero", "ze0ro")
        .replaceAll("one", "o1e")
        .replaceAll("two", "tw2o")
        .replaceAll("three", "thr3e")
        .replaceAll("four", "fo4ur")
        .replaceAll("five", "fi5ve")
        .replaceAll("six", "s6x")
        .replaceAll("seven", "se7en")
        .replaceAll("eight", "ei8ght")
        .replaceAll("nine", "ni9ne");

    
}

console.log(partTwo(getLinesFromFile("day1-input.txt")));
// 54518
