'use strict';
import { swap } from '../swap';

// https://en.wikipedia.org/wiki/Quicksort
console.time('QuickSort');
export const QuickSort = (arr: number[], low: number = 0, high: number = arr.length - 1): number[] => {
  if (low < high) {
    let pivot = partition2(arr, low, high);
    QuickSort(arr, low, pivot - 1);
    QuickSort(arr, pivot + 1, high);
    return arr;
  }
};
console.timeEnd('QuickSort');

function partition(arr: number[], low: number, high: number): number {
  let pivot = low;
  let i = low;

  while (i < high) {
    if (arr[i] < arr[high]) {
      swap(arr, i, pivot);
      pivot += 1;
    }
    i += 1;
  }

  swap(arr, i, pivot);
  return pivot;
}

function partition2(arr: number[], low: number, high: number): number {
  let pivot = arr[high];
  let i = low;
  let j = low;

  while (j < high) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i += 1;
    }
    j += 1;
  }

  swap(arr, i, high);
  return i;
}
