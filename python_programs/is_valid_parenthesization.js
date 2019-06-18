export function is_valid_parenthesization(parens) {
    var depth;
    depth = 0;
    for (var paren, _pj_c = 0, _pj_a = parens, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        paren = _pj_a[_pj_c];
        if ((paren === "(")) {
            depth += 1;
        } else {
            depth -= 1;
            if ((depth < 0)) {
                return false;
            }
        }
    }
    return true;
}
/*
Nested Parens
Input:
parens: A string of parentheses

Precondition:
all(paren in '()' for paren in parens)

Output:
Whether the parentheses are properly nested

Examples:
>>> is_valid_parenthesization('((()()))()')
True
>>> is_valid_parenthesization(')()(')
False*/

