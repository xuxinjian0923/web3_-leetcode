/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * https://leetcode.cn/problems/add-two-numbers/
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/*function revert(cur) {
    let prev = null;
    while (cur) {
        let next = cur.next;
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
}*/

var addTwoNumbers = function (l1, l2) {

    let head = new ListNode()
    const res = head
    let carry = 0
    while (l1 || l2 || carry) {//这个 || carry 真是精妙,强行加了一次
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum/10)
        head.next = new ListNode(sum%10);
        head = head.next;
        l1=l1?l1.next:null
        l2=l2?l2.next:null

    }
    return res.next;

    // 屎山代码,我让特,就是因为分不清哪个长,但是我又不想遍历两次
    /*let flag = 1;
    let flagEnd = 0
    let step = 0
    const node1 = l1
    const node2 = l2
    while (l1 || l2) {
        //我不知道谁长
        let v1 = 0
        let v2 = 0
        if (l1 && l1.val !== undefined) {
            v1 = l1.val
        }
        if (l2 && l2.val !== undefined) {
            v2 = l2.val
        }
        let sum = v1 + v2 + step;
        step = Math.floor(sum / 10)
        //我不知道谁长
        if (!flagEnd) {
            if (l1 && l1.val !== undefined) {
                l1.val = sum % 10;
                l1 = l1.next;
            } else {
                flag = 0;
            }
            if (l2 && l2.val !== undefined) {
                l2.val = sum % 10
                l2 = l2.next
            }
        }
    }
    let res
    if (flag) {
        res = node1
    } else {
        res = node2
    }
    let end = res
    while (end) {
        if (!end.next && step) {
            end.next = new ListNode(step)
            break;
        }
        end = end.next;

    }

    return res*/
}
let node1 = new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(1))));//, new ListNode(1)
let node2 = new ListNode(5, new ListNode(6, new ListNode(4)));
/*let node1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9), new ListNode(9), new ListNode(9)))));//, new ListNode(1)
let node2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));*/
console.log(addTwoNumbers(node1, node2));
