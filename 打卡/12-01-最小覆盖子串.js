/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 *
 * https://leetcode.cn/problems/minimum-window-substring/
 */
var minWindow = function(s, t) {
    // ai自动生成
    let left = 0;
    let right = 0;
    let start = 0;
    let minLen = Infinity;
    let window = {};
    let needs = {};
    let match = 0;
    for (let i = 0; i < t.length; i++) {
        needs[t[i]] = (needs[t[i]] || 0) + 1;
    }
    let needsLen = Object.keys(needs).length;
    while (right < s.length) {
        let c1 = s[right];
        if (needs[c1]) {
            window[c1] = (window[c1] || 0) + 1;
            if (window[c1] === needs[c1]) {
                match++;
            }
        }
        right++;
        while (match === needsLen) {
            if (right - left < minLen) {
                start = left;
                minLen = right - left;
            }
            let c2 = s[left];
            if (needs[c2]) {
                window[c2]--;
                if (window[c2] < needs[c2]) {
                    match--;
                }
            }
            left++;
        }
    }
    return minLen === Infinity ? '' : s.substr(start, minLen);
};
console.log(minWindow("ADOBECODEBANC","ABC"))//BANC
