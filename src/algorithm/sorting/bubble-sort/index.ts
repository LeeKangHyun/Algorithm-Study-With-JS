console.time('BubbleSort');
export const BubbleSort = (arr: number[] = []): number[] => {
  const len = arr.length;
  let swapped = false;

  do {
    swapped = false;

    for (let i = 0; i < len; i += 1) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};
console.timeEnd('BubbleSort');
