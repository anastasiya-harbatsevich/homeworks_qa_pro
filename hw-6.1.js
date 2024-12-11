let amountOfNumbers = 6;
let min = 100;
let max = 1000;

function createArray(amountOfNumbers, min, max) {
  let generatedArray = [];
  for (let i = 0; i < amountOfNumbers; i++) {
    generatedArray[i] = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return generatedArray;
}

let randomArray = createArray(amountOfNumbers, min, max);
console.log("Generated array: " + randomArray);

let generatedArrayLength = randomArray.length;
console.log("Array length: " + generatedArrayLength);

let counterPairedNumbers = 0;
let counterUnpairedNumbers = 0;
function countPairedAndUnpairedNumbers(array, arrayLength) {
  for (let i = 0; i < arrayLength; i++) {
    (array[i] % 2 === 0) ? counterPairedNumbers++ : counterUnpairedNumbers++;
  }
  console.log("Amount of paired numbers: " + counterPairedNumbers);
  console.log("Amount of unpaired numbers: " + counterUnpairedNumbers);
}
countPairedAndUnpairedNumbers(randomArray, generatedArrayLength);

let ratioPairedToUnpaired = Math.round(counterPairedNumbers / counterUnpairedNumbers * 100);
console.log("Ratio Paired to Unpaired numbers is: " + ratioPairedToUnpaired + '%');