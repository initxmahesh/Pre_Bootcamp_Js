// ### Attendance Check

// Define a function, `attendanceCheck`, that accepts a day of the week as a string.

// Using the globally-defined classRoom array, `attendanceCheck` should return a
// new array with only the names of the students present on the inputted day of
// the week.

// ```javascript

// classCheck('Monday'); // => ['Marnie', 'Shoshanna']

// classCheck('Wednesday'); // => ['Marnie', 'Lena']
// ```



let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW

function attendanceCheck(str) {
  let newArr = [];
  for (let i = 0; i < classRoom.length; i++) {
    let obj = classRoom[i];
    let stud = Object.keys(obj)[0];
    let attdarr = obj[stud];
    for (let j = 0; j < attdarr.length; j++) {
      let val2 = attdarr[j];
      let dayName = Object.keys(val2)[0];
      if (dayName === str && val2[dayName] === true) {
        newArr.push(stud);
        break;
      }
    }
  }
  return newArr;
}