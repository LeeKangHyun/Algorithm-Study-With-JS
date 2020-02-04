console.time('MergeSort');
export const MergeSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;
  const length = arr.length;
  const pivot = Math.floor(length / 2);
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot, length);

  return merge(MergeSort(left), MergeSort(right));
};
console.timeEnd('MergeSort');

function merge(left: number[], right: number[]): number[] {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
}
