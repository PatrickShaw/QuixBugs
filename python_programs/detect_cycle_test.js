/*
Driver to test reverse linked list*/
import {Node} from './node';
import {detect_cycle} from './detect_cycle';
export function main() {
    var node, node1, node2, node3, node4, node5, node6, node7;
    node1 = new Node(1);
    node2 = new Node(2, node1);
    node3 = new Node(3, node2);
    node4 = new Node(4, node3);
    node5 = new Node(5, node4);
    if (detect_cycle(node5)) {
        console.log("Cycle detected!");
    } else {
        console.log("Cycle not detected!");
    }
    console.log();
    node1.successor = node5;
    if (detect_cycle(node5)) {
        console.log("Cycle detected!");
    } else {
        console.log("Cycle not detected!");
    }
    console.log();
    node1.successor = node2;
    if (detect_cycle(node2)) {
        console.log("Cycle detected!");
    } else {
        console.log("Cycle not detected!");
    }
    console.log();
    node6 = new Node(6);
    node7 = new Node(7, node6);
    if (detect_cycle(node7)) {
        console.log("Cycle detected!");
    } else {
        console.log("Cycle not detected!");
    }
    console.log();
    node = new Node(0);
    if (detect_cycle(node)) {
        console.log("Cycle detected!");
    } else {
        console.log("Cycle not detected!");
    }
    console.log();
}

    main();

