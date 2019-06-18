/*
Driver to test breadth first search*/
import {Node} from './node';
import {breadth_first_search} from './breadth_first_search';
export function main() {
    var node1, node2, node3, node4, node5, node6, nodea, nodeb, nodec, noded, nodee, nodef, station1, station2, station3, station4, station5, station6;
    station1 = new Node("Westminster");
    station2 = new Node("Waterloo", null, [station1]);
    station3 = new Node("Trafalgar Square", null, [station1, station2]);
    station4 = new Node("Canary Wharf", null, [station2, station3]);
    station5 = new Node("London Bridge", null, [station4, station3]);
    station6 = new Node("Tottenham Court Road", null, [station5, station4]);
    if (breadth_first_search(station6, station1)) {
        console.log("Path found!");
    } else {
        console.log("Path not found!");
    }
    console.log();
    nodef = new Node("F");
    nodee = new Node("E");
    noded = new Node("D");
    nodec = new Node("C", null, [nodef]);
    nodeb = new Node("B", null, [nodee]);
    nodea = new Node("A", null, [nodeb, nodec, noded]);
    if (breadth_first_search(nodea, nodee)) {
        console.log("Path found!");
    } else {
        console.log("Path not found!");
    }
    console.log();
    if (breadth_first_search(nodef, nodee)) {
        console.log("Path found!");
    } else {
        console.log("Path not found!");
    }
    console.log();
    if (breadth_first_search(nodef, nodef)) {
        console.log("Path found!");
    } else {
        console.log("Path not found!");
    }
    console.log();
    node1 = new Node("1");
    node2 = new Node("2");
    node3 = new Node("3");
    node4 = new Node("4", null, [node1]);
    node5 = new Node("5", null, [node2]);
    node6 = new Node("6", null, [node5, node4, node3]);
    node2.successors = [node6];
    if (breadth_first_search(node6, node1)) {
        console.log("Path found!");
    } else {
        console.log("Path not found!");
    }
    console.log();
}
main();
