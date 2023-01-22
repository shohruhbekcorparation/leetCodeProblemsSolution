/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    reverse = x.toString().split('').reverse();
    result = '';
    reverse.forEach((num1) => {
        num2 = Number(num1);
        result += num2
    })
  return Number(result) == x;
       
  };