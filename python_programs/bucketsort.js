export const bucketsort = (arr, k) => {
  const counts = new Array(k).fill(0)
  for (const x of arr) {
    counts[x] += 1;
  }

  const sorted_arr = []
  arr.forEach((count, i) => {
    sorted_arr.push(...new Array(count).fill(i))
  })

  return sorted_arr
}
