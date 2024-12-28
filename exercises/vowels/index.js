// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    let countVowels = 0;
    let vowels = ['a','e','i','o','u'];
    //let strVowels = "aeiou"

    for(let char of str.toLowerCase()){

        if(vowels.includes (char)){

            countVowels++;

        }
    }

    return countVowels;


}

console.log(vowels('Hi There!'));
console.log(vowels('Why do you ask?'));
console.log(vowels('Why?'));



module.exports = vowels;
