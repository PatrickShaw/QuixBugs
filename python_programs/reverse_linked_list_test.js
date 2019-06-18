/*
Driver to test reverse linked list*/
import {Node} from './node';
import {reverse_linked_list} from './reverse_linked_list';
export function main() {
    var node, node1, node2, node3, node4, node5, result;
    node1 = new Node(1);
    node2 = new Node(2, node1);
    node3 = new Node(3, node2);
    node4 = new Node(4, node3);
    node5 = new Node(5, node4);
    result = reverse_linked_list(node5);
    if ((result === node1)) {
        console.log("Reversed!");
    } else {
        console.log("Not Reversed!");
    }
    while (result) {
        console.log(result.value);
        result = result.successor;
    }
    console.log();
    node = new Node(0);
    result = reverse_linked_list(node);
    if ((result === node)) {
        console.log("Reversed!");
    } else {
        console.log("Not Reversed!");
    }
    while (result) {
        console.log(result.value);
        result = result.successor;
    }
    console.log();
    result = reverse_linked_list(null);
    if ((result === null)) {
        console.log("Reversed!");
    } else {
        console.log("Not Reversed!");
    }
    while (result) {
        console.log(result.value);
        result = result.successor;
    }
    console.log();
}

    main();

