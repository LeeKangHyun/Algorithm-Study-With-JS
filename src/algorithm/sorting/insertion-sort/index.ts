console.time('InsertionSort');
export const InsertionSort = (arr: number[]): number[] => {
  const len = arr.length;

  for (let i = 1; i < len; i += 1) {
    let value = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = value;
  }

  return arr;
};
console.timeEnd('InsertionSort');
