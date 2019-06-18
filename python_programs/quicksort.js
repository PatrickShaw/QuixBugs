export function quicksort(arr) {
    var greater, lesser, pivot;
    if ((! arr)) {
        return [];
    }
    pivot = arr[0];
    lesser = quicksort(function () {
    var _pj_a = [], _pj_b = arr.slice(1);
    for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
        var x = _pj_b[_pj_c];
        if ((x < pivot)) {
            _pj_a.push(x);
        }
    }
    return _pj_a;
}
.call(this));
    greater = quicksort(function () {
    var _pj_a = [], _pj_b = arr.slice(1);
    for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
        var x = _pj_b[_pj_c];
        if ((x > pivot)) {
            _pj_a.push(x);
        }
    }
    return _pj_a;
}
.call(this));
    return ((lesser + [pivot]) + greater);
}
/*
QuickSort


Input:
arr: A list of ints

Output:
The elements of arr in sorted order*/

