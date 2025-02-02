/** Exercise 01 - Coins **/

// Add your function here
const calculateChange = (amount) => {
    // Convert the amount to cents to avoid floating-point inaccuracies
    if (typeof amount !== 'number') {
      return 'Error: the value is not a number';
    }
    if (amount < 0) {
      return 'Error: the number is negative';
    }
    if (amount > 100) {
      return 'Error: the number is too large';
    }
    if (amount === 0) {
      return '0 pennies';
    }
  
    let cents = Math.round(amount * 100);
  
    // Define coin values in cents
    const dollar = 100;
    const quarter = 25;
    const dime = 10;
    const nickel = 5;
    const penny = 1;
  
    // Calculate the number of each coin
    const dollars = Math.floor(cents / dollar);
    cents %= dollar;
  
    const quarters = Math.floor(cents / quarter);
    cents %= quarter;
  
    const dimes = Math.floor(cents / dime);
    cents %= dime;
  
    const nickels = Math.floor(cents / nickel);
    cents %= nickel;
  
    const pennies = Math.floor(cents / penny);
  
    // Return the result as a formatted string
    return formatOutput({
      dollars,
      quarters,
      dimes,
      nickels,
      pennies,
    });
  };
  
  const formatOutput = (coins) => {
    // Format the output as a readable string
    const result = [];
    if (coins.dollars > 0) {
      result.push(`${coins.dollars} dollar${coins.dollars !== 1 ? 's' : ''}`);
    }
    if (coins.quarters > 0) {
      result.push(`${coins.quarters} quarter${coins.quarters !== 1 ? 's' : ''}`);
    }
    if (coins.dimes > 0) {
      result.push(`${coins.dimes} dime${coins.dimes !== 1 ? 's' : ''}`);
    }
    if (coins.nickels > 0) {
      result.push(`${coins.nickels} nickel${coins.nickels !== 1 ? 's' : ''}`);
    }
    if (coins.pennies > 0) {
      result.push(`${coins.pennies} penn${coins.pennies !== 1 ? 'ies' : 'y'}`);
    }
    return result.join(', ');
  };
  
  // Sample test cases
  console.log('Input: 4.62');
  console.log(calculateChange(4.62));
  // $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
  
  console.log('Input: 0.16');
  console.log(calculateChange(0.16));
  // $0.16 ==> 1 dime, 1 nickel, 1 penny
  
  console.log('Input: 150.11');
  console.log(calculateChange(150.11));
  // $150.11 ==> Error: the number is too large
  
  console.log('Input: 0.01');
  console.log(calculateChange(0.01));
  // $0.01 ==> 1 penny
  
  console.log('Input: "0.01"');
  console.log(calculateChange('0.01'));
  // $0.01 ==> Error: the value is not a number
  
  console.log('Input: -0.01');
  console.log(calculateChange(-0.01));
  // $-0.01 ==> Error: the number is negative
  
  console.log('Input: 0');
  console.log(calculateChange(0));
  // $0 ==> 0 pennies
  
  console.log('Input: Hello');
  console.log(calculateChange('Hello'));
  // $Hello ==> Error: the value is not a number