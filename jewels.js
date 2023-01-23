/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelsSplit = jewels.split('');
    let stonesSplit = stones.split('');
    let jewelsCount = 0;

    jewelsSplit.forEach((num) => {
        for(let i=0; i<stonesSplit.length; i++) {
            if(stonesSplit[i] === num) {
                jewelsCount++;
            }
        }
    })
    return jewelsCount;
};