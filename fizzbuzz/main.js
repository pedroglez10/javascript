/**
 * For each number 1..n we append 'Fizz' if divisible by 3 and 'Buzz' if divisible by 5.
 * If neither condition applies, we print the number itself (out || i).
 */
function fizzBuzz(n) {
    // Write your code here    
    for (let i = 1; i <= n; i++) {
        let print = '';
        
        if (i % 3 === 0) print += 'Fizz';
        if (i % 5 === 0) print += 'Buzz';
        
        console.log(print || i);
    }
}

fizzBuzz(15);