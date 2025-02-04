/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * https://leetcode.cn/problems/delete-node-in-a-linked-list/
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteNode = function(cur) {
    cur.val = cur.next.val//移花接木大法
    cur.next= cur.next.next

};

const node = new ListNode(4)
node.next= new ListNode(5)
node.next.next= new ListNode(1)
node.next.next.next= new ListNode(9)
console.log(deleteNode(node.next));
console.log(node)
