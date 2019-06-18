/*
Test shortest paths*/
import {shortest_paths} from './shortest_paths';
export function main() {
    var graph, graph2, graph3, result;
    graph = {[["A", "B"]]: 3, [["A", "C"]]: 3, [["A", "F"]]: 5, [["C", "B"]]: (- 2), [["C", "D"]]: 7, [["C", "E"]]: 4, [["D", "E"]]: (- 5), [["E", "F"]]: (- 1)};
    result = shortest_paths("A", graph);
    for (var path, _pj_c = 0, _pj_a = result, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        path = _pj_a[_pj_c];
        console.log(path, result[path]);
    }
    console.log();
    graph2 = {[["A", "B"]]: 1, [["B", "C"]]: 2, [["C", "D"]]: 3, [["D", "E"]]: (- 1), [["E", "F"]]: 4};
    result = shortest_paths("A", graph2);
    for (var path, _pj_c = 0, _pj_a = result, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        path = _pj_a[_pj_c];
        console.log(path, result[path]);
    }
    console.log();
    graph3 = {[["A", "B"]]: 1, [["B", "C"]]: 2, [["C", "D"]]: 3, [["D", "E"]]: (- 1), [["E", "D"]]: 1, [["E", "F"]]: 4};
    result = shortest_paths("A", graph3);
    for (var path, _pj_c = 0, _pj_a = result, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        path = _pj_a[_pj_c];
        console.log(path, result[path]);
    }
    console.log();
}

    main();

