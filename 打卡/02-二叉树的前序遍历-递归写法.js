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

/*1.递归版本每次都要创建新的函数调用栈帧，这个开销是很大的
2.递归版本在调用栈上的内存访问比较分散;   栈版本使用数组，内存访问更连续，对 CPU 缓存更友好

让我解释一下栈帧(Stack Frame):
栈帧是在函数调用时在调用栈(Call Stack)上创建的一块内存区域。每当一个函数被调用时，就会创建一个新的栈帧。它包含了函数执行时所需的各种信息：

局部变量


函数内部定义的所有变量
函数参数

返回地址

函数执行完毕后，程序应该返回到哪里继续执行的地址

上一个栈帧的指针

指向调用当前函数的函数的栈帧*/
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var preorderTraversal = function(root,arr=[]) {

    if (root && root.val!==undefined) {
        arr.push(root.val);
        console.log(root.val)
        if(root.left){
            preorderTraversal(root.left, arr);
        }
        if(root.right){
            preorderTraversal(root.right, arr);
        }
        return arr;
    }

    return []
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
