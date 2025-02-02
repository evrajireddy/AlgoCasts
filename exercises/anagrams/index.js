// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

   let aStringA = buildCharMap(stringA);
   let bStringB = buildCharMap(stringB);

   let arrA = Object.keys(aStringA);
   let arrB = Object.keys(bStringB);

    for(char of stringA){

        if(arrA.length !== arrB.length){

            return false;
        }

        if(char in aStringA === char in bStringB){

            return true;
        }else{

            return false;
        }
    }
}






function buildCharMap(str){

    let charMap = {};

    cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();

    for(let char of cleanedStr){

        if(char in charMap){

            charMap[char]++;
        }else{

            charMap[char] = 1 ;
        }
    }

    return charMap;
    
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));


function anagrams(strA, strB){

    let objA = {};
    let objB = {};
    

    cleanedStrA = strA.replace(/[^\w]/g, '').toLowerCase();
    console.log(cleanedStrA);
    
    cleanedStrB = strB.replace(/[^\w]/g, '').toLowerCase();
    console.log(cleanedStrB);

    let arrA = Object.keys(cleanedStrA);
    let arrB = Object.keys(cleanedStrB);



    for(let char of cleanedStrA){

        if(char in objA){

            objA[char]++;
        }else{

            objA[char] = 1;
        }
    
    }

    for(let char of cleanedStrB){

        if(char in objB){

            objB[char]++;
        }else{

            objB[char] = 1;
        }
    
    }

    for(let char in objA ){

        if(arrA.length !== arrB.length){

            return false;
        }

        if(objA[char] === objB[char]){

            return true;
        }else{

            return false;
        }
    


    /*return {
        firstLoopResult: objA,
        secondLoopResult: objB
      }; 
*/
    

}
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));
