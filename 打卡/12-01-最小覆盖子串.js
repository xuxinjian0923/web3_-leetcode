/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 *
 * https://leetcode.cn/problems/minimum-window-substring/
 */
var minWindow = function(s, t) {
    if(s.length===t.length){
        return t
    }else if (s.length<t.length){
        return ''
    }
    let i=0,j=0
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
        /*else if (set.has(s[j])) {//重复,滑动 左推拉门
            set.delete(s[i++]);
        }*/


    }
    return minLen
};
console.log(minWindow("ADOBECODEBANC","ABC"))//BANC
// console.log(minWindow("a","aa"))//BANC
