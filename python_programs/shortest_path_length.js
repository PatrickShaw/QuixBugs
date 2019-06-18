// TODO: Implement heapq
import * as heapq from './heapq';

export const shortestPathLength = (lengthByEdge, startNode, goalNode) => {
  const unvisitedNodes = []; // FibHeap containing (node, distance) pairs
  heapq.heappush(unvisitedNodes, [0, startNode]);
  const visitedNodes = new Set();

  while(unvisitedNodes.length > 0) {
    [distance, node] = heapq.heappop(unvisitedNodes);
    if (node === goalNode) {
      return distance;
    }

    visitedNodes.add(node);

    for (const nextNode of node.successors) {
      if (visitedNodes.has(nextNode)) {
        continue;
      }

      insertOrUpdate(unvisitedNodes,
        (Math.min(
          get(unvisitedNodes, nextNode) || Number.POSITIVE_INFINITY,
          get(unvisitedNodes, nextNode) + lengthByEdge.get(node).get(nextNode)
        )));
    }
  }
  return Number.POSITIVE_INFINITY;
}

const get = (nodeHeap, wantedNode) => {
  for(const [dist, node] of nodeHeap) {
    if (node === wantedNode) {
      return dist;
    }
  }
  return 0;
}

const insertOrUpdate = (nodeHeap, distNode) => {
  const [dist, node] = distNode;
  for(let i = 0; i < nodeHeap.length; i++) {
    const tpl = nodeHeap[i];
    const [a, b] = tpl;
    if (b === node) {
      nodeHeap[i] = distNode // heapq retains sorted property
    }
  }
  heapq.heappush(nodeHeap, distNode);
  return null;
}

/*
Shortest Path

dijkstra

Implements Dijkstra's algorithm for finding a shortest path between two nodes in a directed graph.

Input:
   length_by_edge: A dict with every directed graph edge's length keyed by its corresponding ordered pair of nodes
   startnode: A node
   goalnode: A node

Precondition:
    all(length > 0 for length in length_by_edge.values())

Output:
    The length of the shortest path from startnode to goalnode in the input graph
*/