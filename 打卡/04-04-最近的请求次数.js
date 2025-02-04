
var RecentCounter = function() {
    this.request = []
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {

    /*
    // 普通解法,500ms,击败6.94%
    if (!t) {
        return null;
    }
    this.request.push(t);
    const end = []
    const first = t-3000
    for (let i = 0; i < this.request.length; i++) {
        const item = this.request[i]
        if(item>=first && item<=t) {
            end.push(item)
        }
    }
    return end.length*/

    //队列解法
    this.request.push(t)
    // let shift = this.request.shift();
    while (this.request[0] < t - 3000) {
        this.request.shift()
    }
    return this.request.length

};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

var obj = new RecentCounter()
console.log(obj.ping(undefined));
console.log(obj.ping(1));
console.log(obj.ping(100));
console.log(obj.ping(3001));
console.log(obj.ping(3002));
