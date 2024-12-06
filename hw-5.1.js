let number = 2;
let power = 3;

function pow(number, power) {
    let product = number;
    for (let i = 1; i < power; i++){
        product = product * number;
    }

    return product;
};

const calculation = pow(number, power);
console.log("result: " + calculation);