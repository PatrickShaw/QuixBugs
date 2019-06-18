export const mergesort = (arr) => {
  const merge = (left, right) => {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if(left[i] <= right[j]) {
        result.append(left[i]);
        i++;
      } else {
        result.append(right[j]);
        j++;
      }
    }
    result.splice(result.length, 0, left.slice(i).concat(right.slice(i)));
    return result;
  }
  if (arr.length === 0) {
    return arr;
  } else {
    const middle = Math.trunc(arr.length / 2);
    left = mergesort(arr.slice(0, middle));
    right = mergesort(arr.slice(middle));
    return merge(left, right);
  }  
}

/*
Merge Sort


Input:
arr: A list of ints

Output:
The elements of arr in sorted order
*/
