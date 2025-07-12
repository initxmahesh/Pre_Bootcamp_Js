// ### Taco Cat Inc.

// You run an insanely profitable business making gourmet tacos for cats. Given an
// object that represents the inventory of your company, add a method
// 'currentInventory' to your object that returns the current value of your
// company's inventory.

// Then, add a sale method that takes an order object, returns the price of the
// order, updates the inventory of the purchased items, and adds the price of the
// order to the company's cash property.

// Heads up: This problem is a bit more involved than anything you'd see on an
// admissions assessment or interview. Besides being a fun challenge, it's
// intended to show how you can use objects and their methods to store and change
// state.


let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0,



};

// tacoCatInc.currentInventory(); // => 1710

// let order = {
//   gourmetShell: 'hard treat shell',
//   gourmetFishFilling: 'salmon'
// };

// tacoCat.Inc.sale(order); // => 7
// tacoCat.Inc.sale(order); // => 7

// tacoCat.gourmetFishFilling.tuna.quantity; // => 98
// tacoCat.cash; // => 14

// tacoCatInc.currentInventory(); // => 1696

// YOUR CODE BELOW
tacoCatInc.currentInventory = function () {
  let key = Object.keys(tacoCatInc)
  let res = 0
  for (let i = 0; i < key.length; i++){
    let items = key[i];
    let inner_itm = tacoCatInc[items];
    if (typeof inner_itm === 'object' && inner_itm !== 'cash') {
      let itm_key = Object.keys(inner_itm)
      for (let j = 0; j < itm_key.length; j++) {
        let itm_name = itm_key[j]
        let value = inner_itm[itm_name]
        res += value.cost * value.quantity
      }
    }

  }
  return res;
}

tacoCatInc.sale = function (order) {
  let totalPrice = 0;
  let orderitem = Object.keys(order);
  for (let i = 0; i < orderitem.length; i++){
    let cate = orderitem[i];
    let itm_name = order[cate];
    let item = tacoCatInc[cate][itm_name];
    totalPrice += item.cost;
    item.quantity -= 1
  }
  tacoCatInc.cash += totalPrice;
  return totalPrice;
}