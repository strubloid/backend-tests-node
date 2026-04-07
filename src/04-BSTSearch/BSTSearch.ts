export function findInOrderSuccessor(inputNode: number, scope: BSTNode) {
    // we first find the node with the given value
    let currentNode: BSTNode | null = scope;

    // this will keep the last node that was bigger than the input node
    let successor: BSTNode | null = null;

    // phrase 1: walk the BST to find the target node

    // we loop the tree until we find the node with the given value
    while (currentNode !== null) {
        // getting the value of the current node to check
        let currentValue = currentNode.value;

        // we check if the input node is bigger than the current node, so we push the right otherwise left
        if (inputNode > currentValue) {
            currentNode = currentNode.right;
        } else if (inputNode < currentValue) {
            successor = currentNode;
            currentNode = currentNode.left;
        } else if (inputNode === currentValue) {
            // after we find the node, we only need to check what is the value on the right
            // if exists a right subtree, the successor is the leftmost node of the right subtree

            // case 1: has a right subtree
            if (currentNode.right !== null) {
                // we get the leftmost node of the right subtree
                let leftmostNode = currentNode.right;

                // check if exists a left node and goes though all left nodes to find the leftmost node
                while (leftmostNode.left !== null) {
                    leftmostNode = leftmostNode.left;
                }

                // we set this leftmost node as the successor
                successor = leftmostNode;
            }

            // case 2: no right subtree, we need to check the ancestors
            return successor ? successor.value : null;
        }
    }

    // return successor !== null ? successor.value : null;
}

export type BSTNode = {
    value: number;
    left: BSTNode | null;
    right: BSTNode | null;
};
