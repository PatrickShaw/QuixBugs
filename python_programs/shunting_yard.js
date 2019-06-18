export const shunting_yard = (tokens) => {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    }
    const rpntokens = [];
    const opstack = [];
    for (const token of tokens) {
        if (Number.isInteger(token)) {
            rpntokens.push(token);
        } else {
            while(opstack.length > 0 && precedence[token] <= precedence[opstack[opstack.length - 1]]) {
                rpntokens.push(opstack.pop());
            }
        }
    }
    while (opstack.length > 0) {
        rpntokens.push(opstack.pop());
    }
}

/*
Infix to RPN Conversion
shunting-yard


Uses Dijkstra's shunting-yard algorithm to transform infix notation into equivalent Reverse Polish Notation.

Input:
tokens: A list of tokens in infix notation

Precondition:
all(isinstance(token, int) or token in '+*-/' for token in tokens)

Output:
The input tokens reordered into Reverse Polish Notation

Examples:
>>> shunting_yard([10, '-', 5, '-', 2])
[10, 5, '-', 2, '-']
>>> shunting_yard([34, '-', 12, '/', 5])
[34, 12, 5, '/' ,'-']
>>> shunting_yard([4, '+', 9, '*', 9, '-', 10, '+', 13])
[4, 9, 9, '*', '+', 10, '-', 13, '+']
*/
