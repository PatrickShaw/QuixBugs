export const depth_first_search = (startnode, goalnode) => {
  const nodesvisited = new Set();

  const search_from = (node) => {
    if (nodesvisited.has(node))
        return false
    else if (node === goalnode)
        return true
    else 
      return node.successors.some(search_from)
  }

  return search_from(startnode)
}
