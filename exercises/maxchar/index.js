// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let obj ={};
    let max = 0 ;
    let maxChar = '';

    for (char of str){

        if(obj[char]){

            obj[char]++;
        }else{

            obj[char] = 1;
        }
    }

    for(let element in obj){

        if(obj[element]> max){

            max = obj[element];
            maxChar = element;
        }

        
    }

    return maxChar;

    
}

console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));

