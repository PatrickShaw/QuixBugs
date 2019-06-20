export const minimumSpanningTree = (weightByEdge) => {
  const groupByNode = new Map();
  const minSpanningTree = new Set();

  const edges = weightByEdge.sort((node) => node.weight);
  for (const edge of edges) {
    const { node1, node2 } = edge;
    if (!groupByNode.has(node1)) {
      // TODO: Check correct
      groupByNode.set(node1, new Set([node1]));
    }
    if (!groupByNode.has(node2)) {
      // TODO: Check correct
      groupByNode.set(node1, new Set([node2]));
    }

    if (groupByNode.get(node1) !== groupByNode.get(node2)) {
      minSpanningTree.add(edge);
      groupByNode = update(groupByNode, node1, node2);
      for (const node of groupByNode.get(node2)) {
        groupByNode = update(groupByNode, node, node1);
      }
    }
  }
  return minSpanningTree;
}

const update = (groupByNode, node1, node2) => {
  const node1Span = new Set(groupByNode.get(node1));
  for(const node of groupByNode.get(node2)) {
    node1Span.add(node);
  }
  groupByNode.set(node1, node1Span);
  return groupByNode;
}


/*
Minimum Spanning Tree


Kruskal's algorithm implementation.

Input:
weight_by_edge: A dict of the form {(u, v): weight} for every undirected graph edge {u, v}

Precondition:
The input graph is connected

Output:
A set of edges that connects all the vertices of the input graph and has the least possible total weight.

Example:
>>> minimum_spanning_tree({
...     (1, 2): 10,
...     (2, 3): 15,
...     (3, 4): 10,
...     (1, 4): 10
... })
{(1, 2), (3, 4), (1, 4)}
*/