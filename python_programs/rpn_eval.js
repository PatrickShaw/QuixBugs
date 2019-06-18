export function rpn_eval(tokens) {
    var a, b, stack;
    function op(symbol, a, b) {
        return {"+": (a, b) => {
    return (a + b);
}, "-": (a, b) => {
    return (a - b);
}, "*": (a, b) => {
    return (a * b);
}, "/": (a, b) => {
    return (a / b);
}}[symbol](a, b);
    }
    stack = [];
    for (var token, _pj_c = 0, _pj_a = tokens, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        token = _pj_a[_pj_c];
        if ((((typeof token) === "number") || (token instanceof Number))) {
            stack.append(token);
        } else {
            a = stack.pop();
            b = stack.pop();
            stack.append(op(token, a, b));
        }
    }
    return stack.pop();
}
/*
Reverse Polish Notation

Four-function calculator with input given in Reverse Polish Notation (RPN).

Input:
A list of values and operators encoded as floats and strings

Precondition:
all(
isinstance(token, float) or token in ('+', '-', '*', '/') for token in tokens
)

Example:
>>> rpn_eval([3.0, 5.0, '+', 2.0, '/'])
4.0*/

