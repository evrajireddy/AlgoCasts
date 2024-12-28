// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n) {

    for(let row = 0; row<n; row++){

        let stair = '';

        for(let column = 0; column <n ; column++){
            if(column <= row) {
                stair += '#';
            }else {
                stair += ' ';
            }
        }
        console.log(stair);
    }

}


console.log(steps(2));
console.log(steps(3));
console.log(steps(4));


function printNumber(n){
    if(n === 0){
        return;
    }
    console.log(n);
    printNumber(n-1);
}

console.log(printNumber(10));

function factorial(n){
    if(n===1 || n===0){
        return 1;
    }else{
        return n * factorial(n-1);
    }

}

console.log(factorial(4));


/*function steps(n , row = 0, stair = ''){

    if(n === row){
        return;

    }

    if(n === stair.length){
        console.log(stair);
        return steps(n, row+1);
    }

    if(stair.length <= row){
        stair += '#';
    }else {
        stair += ' ';
    
    }
}*/
