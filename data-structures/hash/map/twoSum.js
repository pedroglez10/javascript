// Get two indices of numbers in an array that add up to a specific target

function twoSum(nums, target) {
    const map = new Map(); // stores number -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return []; // should never happen if input guarantees a solution
}

// Example
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // [0, 1]
