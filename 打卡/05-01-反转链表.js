/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * https://leetcode.cn/problems/reverse-linked-list/
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.left = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 弄了一个新指针left,让下一个的left指向上一个,充当next的功能
    // 最后把left换成next
    // 马勒戈壁,击败2.83%
    /*while (head&& head.next) {
        head.next.left=head
        head = head.next;
    }
    let mid = head
    while (mid&& mid.left) {
            mid.next=mid.left
            mid = mid.left;
        if (!mid.left) {
            mid.next = null
        }
    }
    return head*/

    // 指针写法,当前node指向上一个暂存的节点
    let prev = null
    while (head) {
        const next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
};
const node = new ListNode(1)
node.next= new ListNode(2)
node.next.next= new ListNode(3)
node.next.next.next= new ListNode(4)
node.next.next.next.next= new ListNode(5)
console.log(reverseList(node));
// console.log(node)
