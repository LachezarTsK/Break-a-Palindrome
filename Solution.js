
/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
    if (palindrome.length === 1) {
        return "";
    }

    let halfLength = Math.floor(palindrome.length / 2);
    for (let i = 0; i < halfLength; i++) {
        if (palindrome.charAt(i) !== 'a') {
            return palindrome.substr(0, i) + 'a' + palindrome.substr(i + 1);
        }
    }
    return palindrome.substr(0, palindrome.length - 1) + 'b';
};
