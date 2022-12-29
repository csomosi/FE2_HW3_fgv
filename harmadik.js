// 3. Feladat: Az előző függvényt bővítsd ki úgy hogy üzenetet dobjon ha a tömb egyik eleme nem szám, és azt ne vegye figyelembe, de így is összegezze a többi number típusú elemet, es irja ki az eredmenyt.

const nums = ["a", 4, 2, true, NaN, "three", 2, 1, 1];
let sum = 0;

// k is for counting the number of items that are not number type
let k = 0;

function sumNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    // if item is a number type, than add it to sum:
    if (typeof array[i] == "number") {
      // but as NaN is also a number type, it would be added to the sum, and the result would be NaN. So I need to check this and make an exception for NaN, and count it as not a number type.
      if (isNaN(array[i])) {
        k = k + 1;
        // if item is not a NaN, but is a number, add it to sum:
      } else {
        sum = sum + array[i];
      }
      // if item is not a number type, then count it with k:
    } else {
      k = k + 1;
    }
  }
  console.log(k + " item(s) are not a number");
  console.log("sum of numbers of array is: " + sum);
}

sumNumbers(nums);
