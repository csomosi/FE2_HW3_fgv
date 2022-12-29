// 4. Feladat: Az előző függvényt bővítsd ki úgy, hogy amennyiben nem szám a tömb egyik eleme, akkor próbálja meg a program a parseInt fgv-el átkonvertálni számmá, és ezután újra nézze meg hogy szám e az adott elem. (Vigyázz hogy a NaN típust isNaN() fgv-el tudod ellenőrizni!). Ha igen, adja hozzá, ha nem, jelezze egy console.log-al hogy nem sikerült a konvertálás.

const nums = ["a", 4, "6 minutes", 2, true, NaN, "10", 2, 1, 1];
let sum = 0;

// k is for counting the number of items that are not number type
let k = 0;
let n;

function sumNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    // if item is a number type, than add it to sum:
    if (typeof array[i] == "number") {
      // but as NaN is also a number type, it would be added to the sum, and the result would be NaN. So I need to check this and make an exception for NaN, and count it with k as not a number type.
      // console.log(i + " -ik elem: " + array[i]);
      if (isNaN(array[i])) {
        k = k + 1;

        // if item is not a NaN, but is a number, add it to sum:
      } else {
        sum = sum + array[i];
      }
      // if item is not a number type, then try to parse it:
    } else {
      n = parseInt(array[i]);
      // console.log(i + "-ik elem: " + array[i] + " ->converted to: " + n);
      // if result of parsing it is a NaN, then count it with k:
      if (isNaN(n)) {
        k = k + 1;
        // otherwise result of parsing is a number and we add it to sum:
      } else {
        sum = sum + parseInt(array[i]);
      }
    }
    // console.log(i + "-ik elem kész, " + k);
  }
  console.log(k + " item(s) could not be converted to number");
  console.log(
    "sum of the numbers and the items converted to numbers of the original array is: " +
      sum
  );
}

sumNumbers(nums);
