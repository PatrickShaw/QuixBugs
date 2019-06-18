import { defaultdict } from './collections';

export const shortestPathLengths = (n, lengthByEdge) => {
  // TODO: Bit hacky
  const lengthByPath = defaultdict(() => defaultdict(() => Number.POSITIVE_INFINITY));
  for(let i = 0; i < lengthByPath.length; i++) {
    lengthByPath.set(i, defaultdict(() => Number.POSITIVE_INFINITY));
  }
  lengthByPath.update(lengthByEdge);
  for(let k = 0; k < n; k++) {
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        lengthByPath.get(i).set(j, min(
          length_by_path.get(i).get(j),
          lengthByPath.get(i).get(k) + lengthByPath.get(j).get(k)
        ))
      }
    }
  }
}


/*
All Shortest Paths
floyd-warshall

Floyd-Warshall algorithm implementation.

Calculates the length of the shortest path connecting every ordered pair of nodes in a directed graph.



Input:
    n: The number of nodes in the graph. The nodes are assumed to have ids 0..n-1
    length_by_edge: A dict containing edge length keyed by an ordered pair of node ids

Precondition:
    There are no negative-length cycles in the input graph

Output:
    A dict containing shortest path length keyed by an ordered pair of node ids
*/