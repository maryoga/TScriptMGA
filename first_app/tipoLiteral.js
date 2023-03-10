"use strict";
function concatOrSumValues(value1, value2, placeholder = 'to-sum') {
    let res;
    if (placeholder === 'to-sum') {
        res = +value1 + +value2;
    }
    else {
        res = value1.toString() + value2.toString();
    }
    return res;
}
console.log(concatOrSumValues(2, 2)); // 4
console.log(concatOrSumValues("2", "2", 'to-concat')); // '22'
console.log(concatOrSumValues("3", "3", 'to-concat')); // Argument of type 
