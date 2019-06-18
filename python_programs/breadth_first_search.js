import Queue from './deque';

export const breadth_first_search = (startNode, goalNode) => {
  queue = new Queue()
  queue.append(startNode)

  nodesseen = new Set()
  nodesseen.add(startNode)

  while (true) {
    node = queue.popleft()

    if (node === goalNode) {
      return true;
    } else {
      const unseenNodes = node.successors.some(successor => !nodesseen.has(successor));
      queue.extend(unseenNodes)
      for(const successor of node.successors) {
        nodesseen.add(successor);
      }
    }
  }
  return false
}