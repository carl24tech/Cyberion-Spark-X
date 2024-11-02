
//YOU BULLSHIT...UNADAI KU CLONE...CLONE IT THEN




function antiClone(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Example usage
const arr = [1, 2, 3, 2, 4, 5, 1];
const uniqueArr = antiClone(arr);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]

This code uses the `filter` method along with `indexOf` to filter out duplicate elements from the input array `arr`.










