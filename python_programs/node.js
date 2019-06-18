class Node {
    constructor(value = null, successor = null, successors = [], predecessors = [], incoming_nodes = [], outgoing_nodes = []) {
        this.value = value;
        this.successor = successor;
        this.successors = successors;
        this.predecessors = predecessors;
        this.incoming_nodes = incoming_nodes;
        this.outgoing_nodes = outgoing_nodes;
    }
    successor() {
        return this.successor;
    }
    successors() {
        return this.successors;
    }
    predecessors() {
        return this.predecessors;
    }
}

