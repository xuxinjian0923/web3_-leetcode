/**
 * @param {string} s
 * @return {boolean}
 *
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 */

var isValid = function(s) {
    // 用obj对象加Set判断,这个写法还不行,"([)]"这个验证不通过
    /*const pairs={
        '(':')',
        '[':']',
        '{':'}',
    }
    const appearedStash = new Set()
    for(var i=0;i<s.length;i++){
        const char = s[i]
        if (pairs[char]) {
            appearedStash.add(pairs[char]);
        } else {
            if (!appearedStash.has(char)) {
                return false;
            }
        }
    }
    return true*/

    // 由于连续的一一对应,所以可以用栈
    /*const stack = []
    const pairs={
        '(':')',
        '[':']',
        '{':'}',
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (pairs[char]) {
            stack.push(pairs[char]);
        } else {
            if(stack.length === 0 || stack.pop()!==s[i]) {
                return false;
            }
        }
    }
    return !stack.length;*/

};
console.log(isValid("([)]"));
