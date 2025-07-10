// Last Friday Night

// According to the song, Katy Perry "maxed our credit cards".

// Define a function, `lastFridayNight`, takes an array of transactions.

// `lastFridayNight` should return the total amount she spent last Friday night.

// ```javascript
// let transactions = [
//   {
//     name: "Tons of glitter",
//     amount: 70
//   },
//   {
//     name: "Porcelain Pink Flamingos",
//     amount: 92
//   },
//   {
//     name: "Chandelier replacement",
//     amount: 10000,
//   },
//   {
//     name: "Dinner at TGIF x6",
//     amount: 350
//   }
// ];

// lastFridayNight(transactions) // => 10512
// ```


// YOUR CODE BELOW
function lastFridayNight(transactions) {
  let sum = 0;
  for (i = 0; i < transactions.length; i++) {
    sum += transactions[i].amount;
  }

  return sum;
}
