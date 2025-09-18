// chunks/groups of segments (non-overlapping)
function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// Example
console.log(chunkArray([1,2,3,4,5,6,7], 3));
// [[1,2,3], [4,5,6], [7]]