/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let resultElement = 0, resultNumber = 0;
    nums.forEach((num1) => {
        resultElement += num1;
        if(`${num1}`.length > 1) {
            arrayNumString = num1.toString().split('');
            arrayNumString.forEach((num2) => {
                resultNumber += Number(num2);
            })

        }else resultNumber += num1;
    })
    return resultElement - resultNumber;
}; 