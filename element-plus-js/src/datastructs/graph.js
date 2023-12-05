class Graph {
  constructor() {
    this.vertices = []
    this.adjList = new Map()
  }

  addVertex(v) {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }
}

export default Graph
