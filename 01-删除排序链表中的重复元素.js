/**
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var deleteDuplicates = function(head) {
    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};

let head = new ListNode(1);
head.next = new ListNode(1)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(3)
console.log(deleteDuplicates(head),'123');
