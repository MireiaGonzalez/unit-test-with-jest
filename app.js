//First Analysis

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))



//Second Analysis

const fromDollarToYen = (num) => {
    let euro = (num/1.2);
    return (euro*127.9);
};

const fromEuroToDollar = (num) => num*1.2;

const fromYenToPound = (num) => {
    let inEuros = (num/127.9);
    return inEuros*0.8;
};

//export all functions that need to be tested
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};