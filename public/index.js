async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

const { GME, MSFT, DIS, BNTX } = mockData;

const stocks = [GME, MSFT, DIS, BNTX];


main(07b0ae594b064ffc839ee15f41d4184f)
let response = await fetch('GME','MSFT','DIS','BNTX');
let resultObject = await response.json();
console.log()

let GME = result.GME
let MSFT = result.MSFT
let DIS = result.DIS
let BTNX = result.BTNX

const stocks = [GME, MSFT, DIS, BNTX];

// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result 
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array
