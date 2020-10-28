function numRegions(graph) {
    // console.log(graph)
    // { a: [ 'b' ], b: [ 'a' ], c: [ 'd' ], d: [ 'e', 'c' ], e: [ 'd' ] }  
    let visited = new Set();
    let counter = 0
    let curr;
   
    for (curr in graph) {
        counter++;
        visited.add(curr);
        graph[curr].forEach(el => {
            if (!visited.has(el)) {
                visited.add(el)
                if (graph[el].includes(curr)){
                    counter--;
                }
            }
        })
    }

    return counter;
  
  
    
}



module.exports = {
    numRegions
};