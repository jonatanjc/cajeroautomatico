let nums = [0, 0, 0, 0];
let x = 2;
for (let i = nums.length - 1; i >= 0; i--) {
    nums[i] = x;
    x *= 2;
}
console.log(nums);