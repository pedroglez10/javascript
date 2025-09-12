/**
 * Using built-in reverse method
 * mutates the original array
 */
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]

// without mutating the original array using slice and reverse
let arr2 = [1, 2, 3, 4, 5];
let reversedArr2 = arr2.slice().reverse();
console.log(reversedArr2); // [5, 4, 3, 2, 1]
console.log(arr2); // [1, 2, 3, 4, 5] (original remains unchanged)

// Manual reversal using a loop
function reverseArrayManual(inputArr) {
    let left = 0;
    let right = inputArr.length - 1;
    while (left < right) {
        // Swap elements
        [inputArr[left], inputArr[right]] = [inputArr[right], inputArr[left]];
        left++;
        right--;
    }
    return inputArr;
}

let arr3 = [1, 2, 3, 4, 5];
console.log(reverseArrayManual(arr3)); // [5, 4, 3, 2, 1]
