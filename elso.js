// 1. feladat: készíts függvényt ami egy neveket tartalmazó tömb-ben megmondja hogy van e benne Gábor és kiírja azt is, hogy hányadik elem a tömbben a Gábor. Feltételezzük hogy csak egyetlen Gábor elem nevű van a tömbben:

const names = [
  "István",
  "Katalin",
  "Attila",
  "Gábor",
  "Péter",
  "Anna",
  "Kitti",
];

let who = "Gábor";
let k;
let found = false;

function findName(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == who) {
      k = i + 1;
      found = true;
    }
  }
  if (found) {
    console.log("we have found " + who + ", it is the " + k + "th item");
  }
}

findName(names);

// megpróbáltam az órán említett while ciklussal is, hogy ne nézze végig ccsak az első találatig, de ez a megoldás ha nem lenne benne a keresett érték a tömbben, akkor végtelen ciklust eredményezne:

// let who = "Gábor";
// let i = 0;
// let found = false;

// function find(who, array) {
//   while (!found) {
//     if (names[i] === who) {
//       found = true;
//     }
//     console.log(i + names[i]);
//     i++;
//   }
//   console.log("A tömb " + i + "-ik eleme " + who);
// }

// find(who, names);
