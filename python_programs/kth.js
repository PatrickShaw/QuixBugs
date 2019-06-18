export function kth(arr, k) {
    var above, below, num_less, num_lessoreq, pivot;
    pivot = arr[0];
    below = function () {
    var _pj_a = [], _pj_b = arr;
    for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
        var x = _pj_b[_pj_c];
        if ((x < pivot)) {
            _pj_a.push(x);
        }
    }
    return _pj_a;
}
.call(this);
    above = function () {
    var _pj_a = [], _pj_b = arr;
    for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
        var x = _pj_b[_pj_c];
        if ((x > pivot)) {
            _pj_a.push(x);
        }
    }
    return _pj_a;
}
.call(this);
    num_less = below.length;
    num_lessoreq = (arr.length - above.length);
    if ((k < num_less)) {
        return kth(below, k);
    } else {
        if ((k >= num_lessoreq)) {
            return kth(above, k);
        } else {
            return pivot;
        }
    }
}
/*
QuickSelect

This is an efficient equivalent to sorted(arr)[k].

Input:
arr: A list of ints
k: An int

Precondition:
0 <= k < len(arr)

Output:
The kth-lowest element of arr (0-based)*/

