var _pj;
export function _pj_snippets(container) {
    function in_es6(left, right) {
        if (((right instanceof Array) || ((typeof right) === "string"))) {
            return (right.indexOf(left) > (- 1));
        } else {
            if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                return right.has(left);
            } else {
                return (left in right);
            }
        }
    }
    container["in_es6"] = in_es6;
    return container;
}
_pj = {};
_pj_snippets(_pj);
export function topological_ordering(nodes) {
    var ordered_nodes;
    ordered_nodes = function () {
    var _pj_a = [], _pj_b = nodes;
    for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
        var node = _pj_b[_pj_c];
        if ((! node.incoming_nodes)) {
            _pj_a.push(node);
        }
    }
    return _pj_a;
}
.call(this);
    for (var node, _pj_c = 0, _pj_a = ordered_nodes, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        node = _pj_a[_pj_c];
        for (var nextnode, _pj_f = 0, _pj_d = node.outgoing_nodes, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
            nextnode = _pj_d[_pj_f];
            if ((set(ordered_nodes).issuperset(nextnode.outgoing_nodes) && (! _pj.in_es6(nextnode, ordered_nodes)))) {
                ordered_nodes.append(nextnode);
            }
        }
    }
    return ordered_nodes;
}
/*
Topological Sort

Input:
nodes: A list of directed graph nodes

Precondition:
The input graph is acyclic

Output:
An OrderedSet containing the elements of nodes in an order that puts each node before all the nodes it has edges to*/

