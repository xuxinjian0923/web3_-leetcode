/**
 * https://leetcode.cn/problems/intersection-of-two-arrays/
 * 给定两个数组 nums1 和 nums2 ，返回 它们的
 * 交集
 *  。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 *
 * 示例 1：
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 * 示例 2：
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 解释：[4,9] 也是可通过的
 *
 *
 * 提示：
 *
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 *
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/*var intersection = function(nums1, nums2) {
    // 利用object已有键值对去重,比如obj[1]=1,再来一次obj[1]=1,obj[1]值还是不变
    let obj1 = {}
    let obj2 = {}
    const arr = []
    nums1.forEach((num) => {
        obj1[num] = num
    })
    nums2.forEach((num) => {
        obj2[num] = num
    })
    console.log(obj1,obj2)
    Object.keys(obj1).forEach(key => {
        console.log(key,obj2[key],'key')
        if (obj2[key] || obj2[key] === 0) {
            arr.push(key)
            console.log(arr,'arr')
        }
    })
    return arr
};*/
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let res = new Set();
    for (const ele of set1) {
        if(set2.has(ele)) {
            res.add(ele)
        }
    }
    return [...res]
};

console.log(intersection([8,0,3], [0,0]))
