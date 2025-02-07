/**
 *
 * https://leetcode.cn/problems/two-sum/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*var twoSum = function(nums, target) {
    let arr = []
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                arr.push(i);
                arr.push(j);
                return arr;
            }
        }
    }

};*/
var twoSum = function(nums, target) {
    let obj ={}
    for (let i = 0; i < nums.length; i++) {
        let res = target - nums[i]
        if (obj[res]!==undefined) {
            return [obj[res], i]
        }else{
            obj[nums[i]] = i
        }
    }
};
console.log(twoSum([2,7,11,15], 9),'123')
