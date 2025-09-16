class UndirectedGraph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(v) {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  addEdge(u, v) {
    if (this.adjList.has(u) && this.adjList.has(v)) {
      // Add a two-way edge for an undirected graph
      this.adjList.get(u).push(v);
      this.adjList.get(v).push(u);
    }
  }

  printGraph() {
    for (const [key, value] of this.adjList) {
      console.log(`${key} -> ${value.join(" ")}`);
    }
  }
}

// Example usage:
const g = new UndirectedGraph();

// Add vertices
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

// Add undirected edges
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "C");
g.addEdge("C", "D");

console.log("Adjacency List for the undirected graph:");
g.printGraph();