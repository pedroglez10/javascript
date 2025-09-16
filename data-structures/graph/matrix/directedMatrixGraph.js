class Graph {
  constructor(V) {
    this.V = V; // Number of vertices
    this.adj_matrix = [];

    // Initialize the adjacency matrix with zeros
    for (let i = 0; i < V; i++) {
      this.adj_matrix[i] = [];
      for (let j = 0; j < V; j++) {
        this.adj_matrix[i][j] = 0;
      }
    }
  }

  addEdge(u, v) {
    // Add a directed edge from vertex u to v
    if (u >= 0 && u < this.V && v >= 0 && v < this.V) {
      this.adj_matrix[u][v] = 1; // Only a one-way connection
    }
  }

  removeEdge(u, v) {
    // Remove the directed edge from vertex u to v
    if (u >= 0 && u < this.V && v >= 0 && v < this.V) {
      this.adj_matrix[u][v] = 0;
    }
  }

  printMatrix() {
    // Print the adjacency matrix to the console
    for (let i = 0; i < this.V; i++) {
      console.log(this.adj_matrix[i].join(" "));
    }
  }
}

// Example usage:
// Create a graph with 4 vertices (0, 1, 2, 3)
const g = new Graph(4);

// Add directed edges
g.addEdge(0, 1); // Edge from 0 to 1
g.addEdge(1, 2); // Edge from 1 to 2
g.addEdge(2, 0); // Edge from 2 to 0
g.addEdge(2, 3); // Edge from 2 to 3

// Print the resulting adjacency matrix
console.log("Adjacency Matrix:");
g.printMatrix();