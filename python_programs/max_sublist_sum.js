export function max_sublist_sum(arr) {
    var max_ending_here, max_so_far;
    max_ending_here = 0;
    max_so_far = 0;
    for (var x, _pj_c = 0, _pj_a = arr, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        x = _pj_a[_pj_c];
        max_ending_here = (max_ending_here + x);
        max_so_far = max(max_so_far, max_ending_here);
    }
    return max_so_far;
}
/*
Max Sublist Sum
max-sublist-sum

Efficient equivalent to max(sum(arr[i:j]) for 0 <= i <= j <= len(arr))

Algorithm source: WordAligned.org by Thomas Guest


Input:
arr: A list of ints

Output:
The maximum sublist sum

Example:
>>> max_sublist_sum([4, -5, 2, 1, -1, 3])
5*/

