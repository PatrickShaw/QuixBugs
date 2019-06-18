import {Counter} from './collections';
export function lcs_length(s, t) {
    var dp;
    dp = new Counter();
    for (var i = 0, _pj_a = s.length; (i < _pj_a); i += 1) {
        for (var j = 0, _pj_b = t.length; (j < _pj_b); j += 1) {
            if ((s[i] === t[j])) {
                dp[[i, j]] = (dp[[(i - 1), j]] + 1);
            }
        }
    }
    return (dp ? max(dp.values()) : 0);
}
/*
Longest Common Substring
longest-common-substring

Input:
s: a string
t: a string

Output:
Length of the longest substring common to s and t

Example:
>>> lcs_length('witch', 'sandwich')
2
>>> lcs_length('meow', 'homeowner')
4*/

