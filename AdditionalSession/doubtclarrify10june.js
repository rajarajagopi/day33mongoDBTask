/* const LEFT = 2;
const RIGHT = 5;
let count = 0;

function isPrime(number = 0) {
  let isPrime = true;
  for (let i = 2; i < number; i++) {
     if(number % i === 0) {
       isPrime = false;
       break;
     }
  }
  return isPrime;
}

for(let i = LEFT; i <= RIGHT; i++) {
   if(i === 2) count++
   else {
     if(isPrime(i)) {
        count++
     }
   }
}

console.log(count) */


// SLIDING WINDOW:

/* const K = 4;
let LEFT = 0;
let RIGHT = K;
const arr = [1, -2, -3, -4, 5, 6, -7];
let SOL_ARR = [];

function findFirstNegative(LEFT = 0, RIGHT = 0, ARR = []) {
  let SOL = 0;
  for (let i= LEFT; i < RIGHT; i++) {
     if(arr[i] < 0) {
       SOL = arr[i]
       break;
     }
  }
  return SOL;
}

while(RIGHT <= arr.length) {
    SOL_ARR.push(findFirstNegative(LEFT, RIGHT, arr))
    LEFT++;
    RIGHT = K + LEFT;
}

console.log(SOL_ARR) */

// console.log(55 >> 33)

const coins = [1, 3, 5];
const sum = 11;
const SOL = [];

for(let i = 0; i < coins.length; i++) {
   let COUNT  = 0;
   if(sum / coins[i] === sum) {
      SOL.push(sum)
      continue;
   }
   if(sum % coins[i] !== 0) {
      COUNT += sum / coins[i]
      // console.log(findPermutations(sum % coins[i], coins[i]))
      COUNT += findPermutations(sum % coins[i], coins.find((c) => c <= sum % coins[i]))
   }
   SOL.push(Math.floor(COUNT))
}
 
 
function findPermutations(num = 0, coin = 0) {
console.log(num, coin)
   if(num % coin === 0) {
     return Math.floor(num / coin);
   }
}

console.log(SOL)

/* 
console.log(findPermutations(2, 1)) */
