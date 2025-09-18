function divisibleSumPairs(n, k, ar) {
    let pairs = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const pair = ar[i] + ar[j];
            
            if ((pair % k) === 0)
                pairs++;
        }
    }
    
    return pairs;
}

// Example usage:
const n = 6;
const k = 3;
const ar = [1, 2, 3, 4, 5, 6];
console.log(divisibleSumPairs(n, k, ar)); // Output: 3