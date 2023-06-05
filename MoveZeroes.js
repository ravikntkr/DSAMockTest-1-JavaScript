var moveZeroes = function (nums) {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === 0) {
      arr1.push(nums[i]);
    } else {
      arr2.push(nums[i]);
    }
  }

  arr1.sort();
  let result = arr2.concat(arr1);

  return result;
};

console.log(moveZeroes([0, 5, 0, 9, 8]));
// OUTPUT : [ 5, 9, 8, 0, 0 ]
