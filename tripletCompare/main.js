'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }

    return [alice, bob];
}

function main() {
    const a = readLine().split(' ').map(Number);
    const b = readLine().split(' ').map(Number);

    const result = compareTriplets(a, b);
    console.log(result.join(' '));
}
