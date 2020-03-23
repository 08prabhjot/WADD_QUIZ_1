const palindrome = 'racecar';
const notPalindrome = 'abc';
function isPalindrome(input) {
    return input.split('').reverse().join('') === input
}
console.log(isPalindrome('abc'));
console.log(isPalindrome('racecar'));