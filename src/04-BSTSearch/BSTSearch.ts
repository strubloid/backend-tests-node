export function findInOrderSuccessor(inputNode: number, scope: BSTNode) {
    // we first find the node with the given value
    let currentNode: BSTNode | null = scope;

    // this will keep the last node that was bigger than the input node
    let successor: BSTNode | null = null;

    // step 1: walk the BST to find the target node, this will stop at the target node
    while (currentNode !== null && currentNode.value !== inputNode) {
        // we check the value of the input node is lower than current value
        if (inputNode < currentNode.value) {
            successor = currentNode; // we set the successor as the current node because is bigger than the input node
            currentNode = currentNode.left; // we go to the left subtree
        } else {
            // we go to the right subtree
            currentNode = currentNode.right;
        }
    }

    // step 2: we check if the currentNode is null
    if (currentNode === null) {
        return null;
    }

    // step 3: we check if we have a right subtree, if we do, the leftmost node is the successor
    if (currentNode.right !== null) {
        let leftMost = currentNode.right;
        while (leftMost.left !== null) {
            leftMost = leftMost.left;
        }
        return leftMost.value;
    }

    // step 4:  for the case we dont have a right subtree, we just return the successor
    return successor ? successor.value : null;
}

export type BSTNode = {
    value: number;
    left: BSTNode | null;
    right: BSTNode | null;
};
