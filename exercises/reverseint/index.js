// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    let reversed = '';

   console.log (str =(n.toString()));

   for(char of str){

    reversed = char + reversed;

    }

  let int = parseInt(reversed);

if (n<0){

    return(int * -1) ;
   }

   return int
    

}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));
