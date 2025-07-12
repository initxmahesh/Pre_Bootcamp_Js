// ### Pet Sounds

// Write a function `petSounds` that takes an animal name and a country name.

// Using the globally-defined animalNoises array, `petSounds` should return a
// sentence that explains which sound the animal makes in the given country.

// ```javascript
// petSounds('dog', 'Iceland'); // => Dogs in Iceland say Voff voff!

// petSounds('cat', 'Korea'); // => Cats in Korea say Nyaong!
// ```


let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

// YOUR CODE BELOW

function petSounds(ani_name, coun_name) {
  for (i = 0; i < animalNoises.length; i++) {
    let obj = animalNoises[i];
    if (ani_name in obj) {
      let obj1 = obj[ani_name];
      let sound = obj1[coun_name];
      ani_name = ani_name[0].toUpperCase() + ani_name.slice(1);
      return `${ani_name}s in ${coun_name} say ${sound}`;
    }
  }
}