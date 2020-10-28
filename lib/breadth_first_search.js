function breadthFirstSearch(startingNode, targetVal) {
    // if(!startingNode.val == targetVal) return null;
    let queue = [startingNode];
    let visited = new Set();
    while(queue.length) {
        let node = queue.shift();
        if(node.val === targetVal) return node;

        if(!visited.has(node)) visited.add(node)
        
        node.neighbors.forEach(el => {if (!visited.has(el)) queue.push(el)})

    }
    return null;
}

module.exports = {
    breadthFirstSearch
};