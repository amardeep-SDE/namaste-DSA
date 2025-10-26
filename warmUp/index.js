// This is a warm-up exercise for DSA

// function if else
// 1. calculate the sum of two integers

function sum(a, b) {
  // return a+b;
  let add = a + b;
  console.log("add", add);
}
sum(5, 3);
// const result =  sum(5,3); //8
// console.log("result", result);

// 2. function that takes an integer and returns its square.

function square(n) {
  return n * n;
}
const sqResult = square(3); //9
console.log("sqResult", sqResult);

// 3. Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.

let age = 15;
if (age >= 18) {
  console.log("eligible to vote");
} else {
  console.log("not eligible to vote");
}

// or
function checkVotingEligibility(age) {
  if (age >= 18) {
    // console.log("eligibility", "eligible to vote"); //eligible to vote
    return "eligible to vote";
  } else {
    // console.log("eligibility", "not eligible to vote"); //not eligible to vote
    return "not eligible to vote";
  }
}
// checkVotingEligibility(15);
const eligibility = checkVotingEligibility(20);
console.log("eligibility", eligibility); //eligible to vote

// 4. accepts a number and checks whether it is Even or Odd

let number = 7;

if (number % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// or
function checkEvenOdd(num) {
  //   if (num % 2 == 0) return "Even number";
  //   else return "Odd number";
  // OR
  return num % 2 == 0 ? "Even number" : "Odd number";
  //OR
  // if(num % 2 == 0) console.log("Even number");
  // else console.log("Odd number");
}

// checkEvenOdd(54);
const evenOddResult = checkEvenOdd(101);
console.log("evenOddResult", evenOddResult);

// Loops
// 5. Write a program to print all even numbers from an array

let arr = [10, 3, 5, 2, 7, 6, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log("even number in array", arr[i]);
  }
}

// 6. Write a function that returns the number of negative numbers in an array.
function countNegativeNumbers(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  return count;
}
let numbersArray = [4, -1, -3, 5, -2, 0, 7];
const negativeCount = countNegativeNumbers(numbersArray);
console.log("negativeCount", negativeCount); //3

// 7. Write a function that returns the smallest number in an array.
function findSmallestNumber(array) {
  let smallest = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return smallest;
}
let array1 = [2, -6, 4, 8, 1, -9];
const smallestNumber = findSmallestNumber(array1);
console.log("smallestNumber", smallestNumber);

// 8. Write a function that returns the largest number in an array.
function findLargestNumber(array) {
  let largest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}
let array2 = [2, -6, 4, 8, 1, -9];
const largestNumber = findLargestNumber(array2);
console.log("largestNumber", largestNumber);
// console.log(findLargestNumber(array2)); // return kar raha h so variable me leke print karwana padta h

// 9. Write a function secondLargest(arr) that returns the second largest distinct number in an array.
function secondLargest(arr) {
  if (arr.length < 2) return "Array should have at least two numbers";
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity
    ? "No second largest found"
    : secondLargest;
}
console.log(secondLargest([0, 3, 5, 2, 7, 9]));
// let array3 = [0, 3, 5, 2, 7, 9];
// const secondLargestNumber = secondLargest(array3);
// console.log("secondLargestNumber", secondLargestNumber);

// 10. Write a function countDigits(n)that takes an integer n and returns how many digits it contains.

function countDigits(n) {
  if (n === 0) return 1;
  n = Math.abs(n); // remove - sign from the no
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

// console.log(countDigits(259));
const digitCount = countDigits(-259);
console.log("digitCount", digitCount);

// OR

let n = 1234;
let count = 0;
if (n === 0) count = 1;
while (n > 0) {
  n = Math.floor(n / 10);
  count++;
}
console.log("count of digits", count);


// 11. Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.
function isPalindrome(x) {
  if (x < 0) return false;
  const str = x.toString();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome(2552)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false

// OR 
var isPalindrome = function(x) {
  if (x < 0) return false;
  let xCopy = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10; // get last digit x % 10
    rev = rev * 10 + rem;
    x = Math.floor(x / 10); // remove last digit x / 10
  }
  return rev === xCopy;
};

// console.log(isPalindrome(121));
const palindromeResult = isPalindrome(121);
console.log("palindromeResult", palindromeResult); // true 

// 12. Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0

var reverse = function(x) {
  let xCopy = x;
  x = Math.abs(x);
  let rev = 0;
  while (x > 0) {
    let last = x % 10;
    rev = rev * 10 + last;
    x = Math.floor(x / 10);
  }
  if (rev > 2**31 - 1) return 0;
  return xCopy < 0 ? -rev : rev;
};

console.log(reverse(123)); // 321

// 13. print all no b/w 1 to 10 except 5
for(let i = 1; i<=10; i++){
  if(i == 5) continue;
  console.log(i);
}

// 14. print only 5 diits from 1 to 10
for(let i = 1; i<=10; i++){
  if(i == 6) break;
  console.log(i);
}