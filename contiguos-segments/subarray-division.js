/**
 * Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
    Lily decides to share a contiguous segment of the bar selected such that:
    The length of the segment matches Ron's birth month, and,
    The sum of the integers on the squares is equal to his birth day.
    Determine how many ways she can divide the chocolate.
 */

const chocolateBar = [2, 2, 1, 3, 2];
const birthDay = 4;
const birthMonth = 2;

function countWaysToDivideChocolate(bar, day, month) {
    let count = 0;

    for (let i = 0; i <= bar.length - month; i++) {
        const segment = bar.slice(i, i + month);
        const sum = segment.reduce((acc, val) => acc + val, 0);
        if (sum === day) {
            count++;
        }
    }

    return count;
}

const totalWays = countWaysToDivideChocolate(chocolateBar, birthDay, birthMonth);
console.log(totalWays); // Output: 2