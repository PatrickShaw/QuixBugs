/*
Driver to test depth first search*/
import {Node} from './node';
import {depth_first_search} from './depth_first_search';
export function main() {
    var nodea, nodeb, nodec, noded, nodee, nodef, station1, station2, station3, station4, station5, station6;
    station1 = new Node("Westminster");
    station2 = new Node("Waterloo", null, [station1]);
    station3 = new Node("Trafalgar Square", null, [station1, station2]);
    station4 = new Node("Canary Wharf", null, [station2, station3]);
    station5 = new Node("London Bridge", null, [station4, station3]);
    station6 = new Node("Tottenham Court Road", null, [station5, station4]);
    if (depth_first_search(station6, station1)) {
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
    if (depth_first_search(nodea, nodee)) {
        console.log("Path found!");
    } else {
        console.log("Path not found!");
    }
    console.log();
    if (depth_first_search(nodef, nodee)) {
        console.log("Path found!");
    } else {
        console.log("Path not found!");
    }
    console.log();
    if (depth_first_search(nodef, nodef)) {
        console.log("Path found!");
    } else {
        console.log("Path not found!");
    }
    console.log();
    nodee.successors = [nodea];
    if (depth_first_search(nodea, nodef)) {
        console.log("Path found!");
    } else {
        console.log("Path not found!");
    }
    console.log();
}

    main();

