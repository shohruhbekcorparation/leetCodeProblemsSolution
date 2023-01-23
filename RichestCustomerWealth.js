/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    largestCostumer = [];

    accounts.forEach((nums) => {
        adding = 0;
        nums.forEach((num) => {
            adding += num;
        })
        largestCostumer.push(adding);
    })

 result = largestCostumer[0];
 
 for(let i=0; i<largestCostumer.length; i++) {
     if(result < largestCostumer[i]) {
         result = largestCostumer[i];
     }
     
 }
 return result;
};