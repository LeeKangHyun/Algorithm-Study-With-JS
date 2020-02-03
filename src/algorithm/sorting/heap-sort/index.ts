'use strict';
import { swap } from '../swap';

// https://en.wikipedia.org/wiki/Heapsort
function iParent(root: number): number {
  return Math.floor((root - 1) / 2);
}

function iLeftChild(root: number): number {
  return root * 2 + 1;
}

function iRightChild(root: number): number {
  return root * 2 + 2;
}

console.time('HeapSort');
export const HeapSort = (arr: number[]): number[] => {
  const len = arr.length;

  heapify(arr, len);

  let end = len - 1;

  while (end > 0) {
    swap(arr, end, 0);
    end -= 1;
    siftDown(arr, 0, end);
  }

  return arr;
};
console.timeEnd('HeapSort');

function heapify(arr: number[], len: number) {
  let start = iParent(len - 1);

  while (start >= 0) {
    siftDown(arr, start, len - 1);
    start -= 1;
  }
}

function siftDown(arr: number[], start: number, end: number) {
  let root = start;

  while (iLeftChild(root) <= end) {
    let child = iLeftChild(root);
    let toSwap = root;

    if (arr[toSwap] < arr[child]) {
      toSwap = child;
    }

    if (child + 1 <= end && arr[toSwap] < arr[child + 1]) {
      toSwap = child + 1;
    }

    if (toSwap === root) {
      return;
    } else {
      swap(arr, root, toSwap);
      root = toSwap;
    }
  }
}
