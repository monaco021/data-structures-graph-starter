function numRegions(graph) {
    let visited = new Set();
    let count = 0;
    console.log(graph)
}

function dfs(node, visited) {
    if (visited.has(node)) return false;
    visited.add(node);
    node.neighbors.forEach(neighbor => dfs(neighbor,visited));
    return true;
}

module.exports = {
    numRegions
};