/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 *
 * 我干了4+2快6个小时
 * https://leetcode.cn/problems/minimum-window-substring/
 */
var minWindow = function(s, t) {
    /*let i=0,j=0
    let minLen = s
    let set = new Set()//存abc的,不是完整

    let str=''
    let arr = []

    const mySet = new Set(t);

    let flag = false

    while(j<s.length){
        if ((!set.size && t.includes(s[j])) || set.size<mySet.size) {//存abd的池子是空的;t有,并且没进set
            if (t.includes(s[j])) {
                set.add(s[j]);//只存abc
            }

            arr.push(s[j]);
            let flag1  = false;
            for (let k = 0; k < t.length; k++) {
                if (!set.has(t[k])) {//t是不是在set都出现过了
                    flag1 = true
                    break
                }
            }
            if (!flag1) {
                //t中所有的值都在set出现过,说明可以收网了
                minLen = minLen.length < arr.length ? minLen : arr.join('');
                // console.log(arr.toString());
                // arr=[]
                // arr.push(s[j])
                // set=new Set(s[j])
                // i=j//先不一个一个滑动了
                // flag1 = false
                flag=true
                set.delete(s[i])
            }
            j++;

        }
        while (flag){
            //移动i,窗口左指针
            arr.shift()
            i++
            if (set.has(s[i])) {
                // set=new Set()
                flag=false
                j=i
                arr=[]
            }
        }

    }
    return minLen*/


    /*
    // 初步优化计数工具，用的map存{a:1,b:1,c:1}，每次用map对象的值去统计总和Object.values(map).forEach((value) => {
    //             sum+=value
    //         })
    let map = {}//第一遍遍历map:{a:1,b:1,c:1}
    for (let i = 0; i < t.length; i++) {
        const char = t[i]
        map[char] = map[char] ? map[char] + 1 : 1
    }
    let first_state = JSON.parse(JSON.stringify(map))
    let left = 0,right = 0
    let minLen = s

    while (right < s.length) {
        let char = s[right]
        if (map[char] !== undefined) {
            map[char]--
        }
        let sum = 0
        Object.values(map).forEach((value) => {
            sum+=value
        })
        if(sum===0) {
            let s1 = s.slice(left,right+1);
            minLen = minLen.length>s1.length?s1:minLen
            // console.log(map,s1)
        }
        while (sum===0) {
            left++//避免第一个
            let l_char = s[left]
            if (map[l_char] !== undefined) {
                map = JSON.parse(JSON.stringify(first_state))
                right=left-1//之前+1了，下面还有right++
                break
            }
        }
        right++
    }
    return minLen*/

    // 优化统计总和，当map对象的值为0时，sum--，这样就不用每次都遍历map对象了
    let map = {}//第一遍遍历map:{a:1,b:1,c:1}
    for (let i = 0; i < t.length; i++) {
        const char = t[i]
        map[char] = map[char] ? map[char] + 1 : 1
    }
    let sum = Object.keys(map).length
    let left = 0,right = 0
    let minLen = s
    let flag = Infinity


    while (right < s.length) {
        let char = s[right]
        if (map[char] !== undefined) {
            map[char]--
            if (map[char]===0) {
                sum--//一开始的3变成2
            }
        }
        while ( sum === 0) {
            let l_char = s[left++]
            if (map[l_char] !== undefined) {
                if (map[l_char] === 0) {
                    let s1 = s.slice(left-1,right+1);
                    minLen = minLen.length>s1.length?s1:minLen
                    flag = 1
                    // console.log(minLen)
                    sum++;
                }
                map[l_char]++;
            }
        }
        right++
    }
    return flag===Infinity?'':minLen


};
console.log(minWindow("ADOBECODEBANC","ABC"))//BANC
console.log(minWindow("a","b"))//BANC
console.log(minWindow("a","aa"))//BANC
