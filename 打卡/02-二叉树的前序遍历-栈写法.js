/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/
 *
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var preorderTraversal = function(root) {
    const stack = []
    const res = []

    if (root && root.val!==undefined) {
        stack.push(root)
    }
    while (stack.length) {
        let node = stack.pop();// 弹个栈,拿到这个节点,去查这个节点下面有没有左右节点
        res.push(node.val);

        if(node.right){//先放右子节点,保证弹出顺序
            stack.push(node.right)
        }
        if(node.left){
            stack.push(node.left)
        }

    }
    return res

};

let treeNode = new TreeNode(1);
treeNode.left = new TreeNode(2);
treeNode.left.left = new TreeNode(4);
treeNode.left.right = new TreeNode(5);
treeNode.left.right.left = new TreeNode(6);
treeNode.left.right.right = new TreeNode(7);
treeNode.right = new TreeNode(3);
treeNode.right.right = new TreeNode(8);
treeNode.right.right.left = new TreeNode(9);
// console.log(treeNode)

console.log(preorderTraversal(treeNode))
