import { InsertionSort } from '../insertion-sort';
import { SelectionSort } from '../selection-sort';
import { MergeSort } from '../merge-sort';
import { HeapSort } from '../heap-sort';
import { QuickSort } from '../quick-sort';
import { BubbleSort } from '../bubble-sort';

const arr = [9, 3, 1, 2, 4, 7, 8, 5, 6, 0];
const ans = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// https://en.wikipedia.org/wiki/Sorting_algorithm
describe('알고리즘 / 정렬', () => {
  // Simple sorts
  it('삽입 정렬()', () => {
    expect(InsertionSort(arr)).toEqual(ans);
  });

  it('선택 정렬()', () => {
    expect(SelectionSort(arr)).toEqual(ans);
  });

  // Efficient sorts
  it('병합 정렬()', () => {
    expect(MergeSort(arr)).toEqual(ans);
  });

  it('힙 정렬()', () => {
    expect(HeapSort(arr)).toEqual(ans);
  });

  it('퀵 정렬()', () => {
    expect(QuickSort(arr)).toEqual(ans);
  });

  // Bubble sort and variants
  it('버블 정렬()', () => {
    expect(BubbleSort(arr)).toEqual(ans);
  });

  // Distribution sort
});
