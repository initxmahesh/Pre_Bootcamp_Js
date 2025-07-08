// YOUR CODE BELOW
function taxCalculator(price, state) {
    if (state === 'NY')
        return 0.04 * price + price;
    else if (state === 'NJ')
        return 0.06625 * price + price;
}

console.log(taxCalculator(100, 'NY'))