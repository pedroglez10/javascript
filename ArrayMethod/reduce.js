/**
 * Reduce
 * Used to reduce an array to a single value by executing a reducer function on each element of the array.
 * The reducer function takes four arguments: accumulator, currentValue, currentIndex, and array.
 * Grouping and counting occurrences of elements in an array.
*/

const array = [1, 2, 3, 4];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 10

const socks = [1, 2, 1, 3, 2, 1, 4];
const sockCount = socks.reduce((acc, sock) => {
    acc.counts[sock] = (acc.counts[sock] || 0) + 1;

    if (acc.counts[sock] % 2 === 0) {
        acc.pairs++; // every even occurrence makes a pair
    }

    return acc;
}, {counts: {}, pairs: 0});
// console.log(sockCount);

const arr = [1, 2, 3, 4, 5];
const asc = arr.sort((a, b) => a - b).pop().reduce((acc, el, i) => acc += el);
console.log(asc);
