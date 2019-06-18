/*
Test shortest path lengths*/
import {shortest_path_lengths} from './shortest_path_lengths';
export function main() {
    var graph, graph2, graph3, graph4, result;
    graph = {[[0, 2]]: 3, [[0, 5]]: 5, [[2, 1]]: (- 2), [[2, 3]]: 7, [[2, 4]]: 4, [[3, 4]]: (- 5), [[4, 5]]: (- 1)};
    result = shortest_path_lengths(6, graph);
    for (var node_pairs, _pj_c = 0, _pj_a = result, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        node_pairs = _pj_a[_pj_c];
        console.log(node_pairs, result[node_pairs]);
    }
    console.log();
    graph2 = {[[0, 1]]: 3, [[1, 2]]: 5, [[2, 3]]: (- 2), [[3, 4]]: 7};
    result = shortest_path_lengths(5, graph2);
    for (var node_pairs, _pj_c = 0, _pj_a = result, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        node_pairs = _pj_a[_pj_c];
        console.log(node_pairs, result[node_pairs]);
    }
    console.log();
    graph3 = {[[0, 1]]: 3, [[2, 3]]: 5};
    result = shortest_path_lengths(4, graph3);
    for (var node_pairs, _pj_c = 0, _pj_a = result, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        node_pairs = _pj_a[_pj_c];
        console.log(node_pairs, result[node_pairs]);
    }
    console.log();
    graph4 = {[[0, 1]]: 3, [[1, 2]]: 5, [[2, 0]]: (- 1)};
    result = shortest_path_lengths(3, graph4);
    for (var node_pairs, _pj_c = 0, _pj_a = result, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        node_pairs = _pj_a[_pj_c];
        console.log(node_pairs, result[node_pairs]);
    }
    console.log();
}

    main();

