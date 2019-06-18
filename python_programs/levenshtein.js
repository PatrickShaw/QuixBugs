export function levenshtein(source, target) {
    if (((source === "") || (target === ""))) {
        return (source.length || target.length);
    } else {
        if ((source[0] === target[0])) {
            return (1 + levenshtein(source.slice(1), target.slice(1)));
        } else {
            return (1 + min(levenshtein(source, target.slice(1)), levenshtein(source.slice(1), target.slice(1)), levenshtein(source.slice(1), target)));
        }
    }
}
/*
Levenshtein Distance


Calculates the Levenshtein distance between two strings.  The Levenshtein distance is defined as the minimum amount of single-character edits (either removing a character, adding a character, or changing a character) necessary to transform a source string into a target string.

Input:
source: The string you begin with.
target: The string to transform into.

Output:
The Levenshtein distance between the source and target.

Example:
electron can be transformed into neutron by removing the e, turning the l into n, and turning the c into u.
>>> levenshtein(electron, neutron)
3*/

