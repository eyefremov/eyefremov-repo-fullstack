/** Exercise 01 - Fizzbuzz

Write a program that writes all the numbers from 1 to 100, with some exceptions: 
- For numbers divisible by 3, print “fizz” 
- For numbers divisible by 5 (but not 3), print “buzz” 
- For numbers divisible by 3 and 5, print “fizzbuzz”

Use console.log() to write the proper output to the command line.

**/

// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// ...
/**
 * Prints numbers from 1 to 100 with special rules:
 * - Multiples of 3 print "fizz"
 * - Multiples of 5 (but not 3) print "buzz"
 * - Multiples of both 3 and 5 print "fizzbuzz"
 */
function fizzBuzz() {
    for (let i = 1; i <= 100; i += 1) {
      // Check divisibility by both 3 and 5 first
      if (i % 15 === 0) {
        console.log('fizzbuzz');
      } else if (i % 3 === 0) {
        console.log('fizz');
      } else if (i % 5 === 0) {
        console.log('buzz');
      } else {
        console.log(i);
      }
    }
  }
  
  // Call the function to see the output
  fizzBuzz();
  