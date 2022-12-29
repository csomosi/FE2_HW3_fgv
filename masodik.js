// 2. feladat: készíts függvényt ami egy számokat tartalmazó tömbön végig megy és egy összeg változóba bepakolja a számok összegét. A ciklus után az összeg változót írja ki a képernyőre.

const nums = [4, 2, 2, 1, 1];
let sum = 0;

function sumNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  console.log(sum);
}

sumNumbers(nums);
