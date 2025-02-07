/**
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let i = 0;
    let j = 0;
    let maxLen = 0;
    while (j < s.length) {
        if (set.has(s[j])) {
            /*set.delete(s[j]);
            set.add(s[j]);*/
            set.delete(s[i++])
            // i++;
        } else {
            set.add(s[j++]);
            maxLen = Math.max(maxLen, set.size);

        }
    }
    return maxLen;
};
/*var lengthOfLongestSubstring = function (s) {
    // 快是快，这道题考察的是滑动窗口,下面写法没意思
    // 用于存储最长无重复字符子串的长度
    let maxLength = 0;
    // 用于存储当前无重复字符子串
    let currentSubstring = '';

    for (let i = 0; i < s.length; i++) {
        // 获取当前字符
        const char = s[i];
        // 检查当前字符是否在当前子串中
        const index = currentSubstring.indexOf(char);
        if (index > -1) {
            // 如果存在重复字符，更新当前子串，从重复字符的下一个位置开始截取
            currentSubstring = currentSubstring.slice(index + 1);
        }
        // 将当前字符添加到当前子串中
        currentSubstring += char;
        // 更新最长无重复字符子串的长度
        maxLength = Math.max(maxLength, currentSubstring.length);
    }

    return maxLength;
};*/
// console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('pwwkek'))
