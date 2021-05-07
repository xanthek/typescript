import {
    concatArr,
    addArr,
    lgNum,
    cut3,
} from './utils/arrays';

import {sum,multiply} from './utils/numbers.js';
import {capitalize} from './utils/strings.js';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = addArr(numArr);
const mixArr = concatArr(numArr, wordArr);
const myNum = ('15' as unknown) as number % 2;

// results of function calls
console.log(cut3(mixArr));
console.log(sum(arrSum, myNum));
console.log(capitalize('the quick brown fox'));
console.log(multiply(('5' as unknown) as number, 8));
console.log(lgNum(mixArr));
