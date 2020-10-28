function maxValue(node, visited=new Set()) {
    if (visited.has(node)) return -Infinity;

    visited.add(node);
    let max = node.val;
    if (node.neighbors) {
        node.neighbors.forEach(el => {
            let tempMax = maxValue(el, visited);
            if (tempMax > max) {
                max = tempMax;
                console.log(max);
            }
        })
    }

    // let max = node.neighbors.map(neighbor => {
    //     return maxValue(neighbor, visited)
    // })
    // return Math.max(node.val, ...max);


    return max;
}

module.exports = {
    maxValue
};
