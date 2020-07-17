function BinaryTree() {
  let root = null;
  let Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  this.inOrderTraverse = function () {
    inOrderTraverseNode(root);
  };
  // 递归输出值，递归会将控制权转到下一层。
  function inOrderTraverseNode(node) {
    if (node !== null) {
      inOrderTraverseNode(node.left);
      console.log(node.key);
      inOrderTraverseNode(node.right);
    }
  }
  this.insert = function (value) {
    let newNode = new Node(value);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  function insertNode(node, newNode) {
    if (node.key > newNode.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }
};

let binaryTree = new BinaryTree();
let arr = [10, 4, 3, 55, 11, 22, 13, 8, 9];
arr.map(val => {
  binaryTree.insert(val);
});
binaryTree.inOrderTraverse();