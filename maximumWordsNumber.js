/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    sentencesNum = [];
    sentences.forEach((words) => {
        sentencesNum.push(words.split(" ").length);
    })

return Math.max(...sentencesNum);
};