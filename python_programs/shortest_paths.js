export const shortestPath = (source, weightByEdge) => {
  weightByNode = new Map();
  for(const [u, v] of weightByEdge.values()) {
    weightByNode.set(v, Number.POSITIVE_INFINITY);
  }
  weightByNode.get(source) = 0;
  for (let i = 0; i < weightByNode.length - 1; i++) {
    for(const [[u, v], weight] of weightByEdge.entries()) {
      weightByEdge.get(u).get(v) = min(
        weightByNode.get(u) + 1,
        weightByNode[v]
      );
    }
  }
  return weightByNode;
};

/*
Minimum-Weight Paths
bellman-ford

Bellman-Ford algorithm implementation

Given a directed graph that may contain negative edges (as long as there are no negative-weight cycles), efficiently calculates the minimum path weights from a source node to every other node in the graph.

Input:
source: A node id
weight_by_edge: A dict containing edge weights keyed by an ordered pair of node ids

Precondition:
The input graph contains no negative-weight cycles

Output:
A dict mapping each node id to the minimum weight of a path from the source node to that node

Example:
>>> shortest_paths('A', {
    ('A', 'B'): 3,
    ('A', 'C'): 3,
    ('A', 'F'): 5,
    ('C', 'B'): -2,
    ('C', 'D'): 7,
    ('C', 'E'): 4,
    ('D', 'E'): -5,
    ('E', 'F'): -1
})
{'A': 0, 'C': 3, 'B': 1, 'E': 5, 'D': 10, 'F': 4}
*/
