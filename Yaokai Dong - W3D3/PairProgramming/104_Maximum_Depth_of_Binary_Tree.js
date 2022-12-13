// Driver: Yaokai
// Navigator: Albert

// Feedback: Albert is really nice, he always open to different opinion and willing to try 

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
 * @return {number}
 */

// I - node (treeNode)
// O - number (maximum depth of the binary tree)
// C - The number of nodes in the tree is in the range [0, 104].
//   - 100 <= Node.val <= 100
// E - n/a

var maxDepth = function(root) {
  // recursive solution
  // base case: single node, no child
  // Time complexity: O(n)
  // Space complexity: O(1)
  if (!root) { return 0; };
  // return the child node max depth plus 1 
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);

  // iterative solution
  if (!root) { return 0; };
  // initialize the queue for the nodes
  let queue = [[root]];
  // initizlize the depth tracker variable
  let depth = 0;
  // a while loop with condition queue.length
  while (queue.length && queue[0].length) {
    let curLevel = queue.shift();
    let nextLevel = [];
    for (let i = 0; i < curLevel.length; i++) {
      let curNode = curLevel[i];
      if (curNode.left) {
        nextLevel.push(curNode.left);
      }
      if (curNode.right) {
        nextLevel.push(curNode.right);
      }
    }
    queue.push(nextLevel);
    depth++; 
  };

  // Time complexity: O(n)
  // Space complexity: O(n)
  return depth;
};