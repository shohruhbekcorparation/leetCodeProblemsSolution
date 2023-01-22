/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    var natija = []
    for(let i = 1; i<=n; i++){
        if(i % 3 == 0 && i % 5 == 0  ){
            natija.push('FizzBuzz')
        }
        else if(i % 3 == 0) {
            natija.push('Fizz')

        }
        else if(i % 5 == 0) {
            natija.push('Buzz')
        }
        else{
            natija.push(i.toString())
        }
    }
    return natija;
};