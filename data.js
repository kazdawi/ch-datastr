// Recursive JavaScript function to generate a Fibonacci series 
var fibonacci_series = function (n) {
    
    if (n <= 1) {
      return [0, 1];
    } else {
      var s = fibonacci_series(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s.slice(0, n);
    }
  };
  console.log(fibonacci_series(8));
// recursive palindrome checker 

  const test = (text) => {
    if (typeof text !== 'string') {
          return 'String should not be empty!'
    }
  
    if (text.length <= 1) {
      return true
    }
  
    if (text[0] !== text[text.length - 1])
    {
      return false
    } 
    else 
    {
      return test(text.slice(1, text.length - 1))
    }
  }


  function power(base, exponent) {
    // Base case: any number raised to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    }
    // Handle negative exponent: compute the reciprocal
    if (exponent < 0) {
        return 1 / power(base, -exponent);
    }
    // Recursive case: multiply base by the result of the smaller problem
    return base * power(base, exponent - 1);
}





