// sliding window segments (overlapping segments)
function slidingWindow(arr, size) {
    let result = [];
    for (let i = 0; i <= arr.length - size; i++) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// Example
console.log(slidingWindow([1,2,3,4,5], 3));
// [[1,2,3], [2,3,4], [3,4,5]]