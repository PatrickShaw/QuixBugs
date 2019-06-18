/*
Test shortest path length*/
import {Node} from './node';
import {shortest_path_length} from './shortest_path_length';
export function main() {
    var length_by_edge, node0, node1, node2, node3, node4, node5, result;
    node1 = new Node("1");
    node5 = new Node("5");
    node4 = new Node("4", null, [node5]);
    node3 = new Node("3", null, [node4]);
    node2 = new Node("2", null, [node1, node3, node4]);
    node0 = new Node("0", null, [node2, node5]);
    length_by_edge = {[[node0, node2]]: 3, [[node0, node5]]: 10, [[node2, node1]]: 1, [[node2, node3]]: 2, [[node2, node4]]: 4, [[node3, node4]]: 1, [[node4, node5]]: 1};
    result = shortest_path_length(length_by_edge, node0, node1);
    console.log(result);
    result = shortest_path_length(length_by_edge, node0, node5);
    console.log(result);
    result = shortest_path_length(length_by_edge, node2, node2);
    console.log(result);
    result = shortest_path_length(length_by_edge, node1, node5);
    console.log(result);
}

    main();

