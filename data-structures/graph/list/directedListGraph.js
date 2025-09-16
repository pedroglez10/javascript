class DirectedGraph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(v) {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  addEdge(u, v) {
    // Adds a directed edge from vertex u to vertex v
    if (this.adjList.has(u) && this.adjList.has(v)) {
      this.adjList.get(u).push(v);
    }
  }

  printGraph() {
    const keys = this.adjList.keys();
    for (const key of keys) {
      const values = this.adjList.get(key);
      let output = `${key} -> `;
      for (const value of values) {
        output += `${value} `;
      }
      console.log(output);
    }
  }
}

// Example Usage:
const g = new DirectedGraph();

// Add vertices
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

// Add directed edges
g.addEdge("A", "B"); // Edge from A to B
g.addEdge("B", "C"); // Edge from B to C
g.addEdge("C", "A"); // Edge from C to A
g.addEdge("C", "D"); // Edge from C to D

console.log("Adjacency List for the directed graph:");
g.printGraph();