export const find_first_in_sorted = (arr, x) => {
  const lo = 0
  const hi = arr.length

  while (lo <= hi) {
    mid = (lo + hi) // 2

    if ((x === arr[mid]) && (mid === 0 || x != arr[mid - 1]))
        return mid
    else if (x <= arr[mid])
        hi = mid
    else
        lo = mid + 1
  }

  return -1
}

/*
Fancy Binary Search
fancy-binsearch


Input:
    arr: A sorted list of ints
    x: A value to find

Output:
    The lowest index i such that arr[i] == x, or -1 if x not in arr

Example:
    >>> find_first_in_sorted([3, 4, 5, 5, 5, 5, 6], 5)
    2
*/