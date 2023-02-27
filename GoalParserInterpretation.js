/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let commandWord = command.split("()").join("o").replaceAll("(al)", "al");
    return commandWord;
};