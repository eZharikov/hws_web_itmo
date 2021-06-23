'use strict'
//задание 1
let nums = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
];
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++){
        nums[i][j] += 10;
    } 
}
console.log(nums);

//задание 2
let ranArr = [];
    for (let i=0; i<7; i++) {
        ranArr.push( Math.round( Math.random() * 100 ));
    }
    console.log(ranArr);

let max = ranArr[0]; let maxIndex = 0;
let min = ranArr[0]; let minIndex = 0;
    for (let i = 1; i < ranArr.length; i++) {
        if (ranArr[i] < min) {
            min = ranArr[i];
            minIndex = i;
        }
    
        if (ranArr[i] > max) {
            max = ranArr[i];
            maxIndex = i;
        }
    }
ranArr[minIndex] = max;
ranArr[maxIndex] = min;
console.log(ranArr);

//задание 3

let arr = [1, -1, 2, -3, 4, -5, 6 ,-7];
for (let i = arr.length - 1; i >= 0; i--){
    if (arr[i] > 0){
        arr.splice(i,1);
    }  
}

console.log(arr);

let nums1 = [34, 89, -12, 90, -1, 0, -823, 56];
let newNums = [];
for (let i = nums1.length-1; i >= 0; i--){
    if (nums1[i] < 0) {
        newNums.push(nums1[i]);
    }
}

// если почитать о Filter()
//let newArr = arr.filter(function(number) {
//     return number > 0;
//   });
// console.log(newArr);



