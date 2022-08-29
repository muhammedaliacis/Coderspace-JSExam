'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'minimalOperations' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY words as parameter.
 */

function minimalOperations(words) {
    // Write your code here
    let i = 0;
    let b = 0;
    let c = 0;
    var a = [];
    words.forEach(function(word)
    {
        while (word[i]){
            if (word[i] === word[i+1] && word[i] === word[i + 2]){
                c++;
                i+= 1;
            }
            else if (word[i] === word[i+1] && word[i] !== word[i + 2]){
                c++;
            }
            i++;
        }
        a[b] = c;
        b++;
        c = 0;
        i = 0;
    })
    return (a);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const wordsCount = parseInt(readLine().trim(), 10);

    let words = [];

    for (let i = 0; i < wordsCount; i++) {
        const wordsItem = readLine();
        words.push(wordsItem);
    }

    const result = minimalOperations(words);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
