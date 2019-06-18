export const lis = (arr) => {
  const ends = new Map();
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    const prefixLengths = [];
    for (let j = 1; longest + 1; j++) {
      if (arr[ends[j]] < val) {
        prefixLengths.push(arr[ends[j]]);
      }
    }

    const length = prefixLengths.length > 0 ? Math.max(...prefixLengths) : 0;

    if (length === longest || val < arr[ends[length + 1]]) {
      ends[length + 1] = i;
      longest = length + 1;
    }
  }

  return longest;
}

/*
Longest Increasing Subsequence
longest-increasing-subsequence


Input:
arr: A sequence of ints

Precondition:
The ints in arr are unique

Output:
The length of the longest monotonically increasing subsequence of arr

Example:
>>> lis([4, 1, 5, 3, 7, 6, 2])
3
*/