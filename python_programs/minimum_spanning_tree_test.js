/*
Driver to test minimum spanning tree*/
import {minimum_spanning_tree} from './minimum_spanning_tree';
export function main() {
    var result;
    result = minimum_spanning_tree({[[1, 2]]: 10, [[2, 3]]: 15, [[3, 4]]: 10, [[1, 4]]: 10});
    for (var edge, _pj_c = 0, _pj_a = result, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        edge = _pj_a[_pj_c];
        [console.log(edge)];
    }
    console.log();
    result = minimum_spanning_tree({[[1, 2]]: 6, [[1, 3]]: 1, [[1, 4]]: 5, [[2, 3]]: 5, [[2, 5]]: 3, [[3, 4]]: 5, [[3, 5]]: 6, [[3, 6]]: 4, [[4, 6]]: 2, [[5, 6]]: 6});
    for (var edge, _pj_c = 0, _pj_a = result, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        edge = _pj_a[_pj_c];
        [console.log(edge)];
    }
    console.log();
    result = minimum_spanning_tree({[[1, 2]]: 6, [[1, 3]]: 1, [[2, 4]]: 2});
    for (var edge, _pj_c = 0, _pj_a = result, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        edge = _pj_a[_pj_c];
        [console.log(edge)];
    }
    console.log();
}

    main();

