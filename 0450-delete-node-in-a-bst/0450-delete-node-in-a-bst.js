/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return null

    // traverse till u find the node
    if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else {
        // found the node
        // the actual deletion happens here

        if(!root.left) return root.right
        if(!root.right) return root.left

        // find minimum from right subtree
        let current = root.right
        while (current.left){
            current = current.left
        }
        root.val = current.val
        root.right = deleteNode(root.right, root.val)
    }
    return root
};