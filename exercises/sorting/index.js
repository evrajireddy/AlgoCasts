// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
/*
function bubbleSort(arr) {

    for(let i=0; i<arr.length; i++){
        for(let j=0; J<(arr.length-i-1); j++){

            if(arr[j] > arr[j+1]){
                const lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }

        }
    }

}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}*/

var myMap = new Map();

    myMap.set(1, "Uno");
    myMap.set(2, "dos");
    myMap.set(3, "Tres");
    myMap.set(4, "Cuarto");

    console.log(myMap);

    for(let key of myMap.keys()){

        console.log(`key is ${key}`);
    }

    for(let value of myMap.values()){
        console.log(`value is ${value}`);
    }

    for(let [key, value] of myMap){
        console.log(`key is : ${key} and value is ${value}`);
    }

    myMap.forEach((value, key) => console.log(`value is ${value} and key is ${key} `));

    myMap.delete(2);

    console.log(myMap);

    


