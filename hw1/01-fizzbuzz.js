/** Exercise 01 - Fizzbuzz

Use console.log() to write the proper output to the command line.

 * Prints numbers from 1 to 100 with special rules:
 * - Multiples of 3 print "fizz"
 * - Multiples of 5 (but not 3) print "buzz"
 * - Multiples of both 3 and 5 print "fizzbuzz"
 */
const fizzBuzz = () => {
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
