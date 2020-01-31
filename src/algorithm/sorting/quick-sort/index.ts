'use strict';
import { swap } from '../swap';

// https://en.wikipedia.org/wiki/Quicksort
console.time('QuickSort');
export const QuickSort = (arr: number[], left: number = 0, right: number = arr.length - 1): number[] => {
  if (left < right) {
    let pivot = partition(arr, left, right);
    QuickSort(arr, left, pivot - 1);
    QuickSort(arr, pivot + 1, right);
    return arr;
  }
};
console.timeEnd('QuickSort');

function partition(arr: number[], left: number, right: number): number {
  let pivot = left;
  let i = left;

  while (i < right) {
    if (arr[i] < arr[right]) {
      swap(arr, i, pivot);
      pivot += 1;
    }
    i += 1;
  }

  swap(arr, i, pivot);
  return pivot;
}
