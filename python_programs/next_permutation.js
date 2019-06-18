export function next_permutation(perm) {
    var next_perm;
    for (var i = (perm.length - 2), _pj_a = (- 1); (i < _pj_a); i += (- 1)) {
        if ((perm[i] < perm[(i + 1)])) {
            for (var j = (perm.length - 1), _pj_b = i; (j < _pj_b); j += (- 1)) {
                if ((perm[j] < perm[i])) {
                    next_perm = list(perm);
                    [next_perm[i], next_perm[j]] = [perm[j], perm[i]];
                    next_perm.slice((i + 1)) = reversed(next_perm.slice((i + 1)));
                    return next_perm;
                }
            }
        }
    }
}
/*
Next Permutation
next-perm


Input:
perm: A list of unique ints

Precondition:
perm is not sorted in reverse order

Output:
The lexicographically next permutation of the elements of perm

Example:
>>> next_permutation([3, 2, 4, 1])
[3, 4, 1, 2]*/

