import { BubbleSort } from '../bubble-sort';
import { SelectionSort } from '../selection-sort';
import { InsertionSort } from '../insertion-sort';

const arr = [9, 3, 1, 2, 4, 7, 8, 5, 6, 0];

describe('알고리즘 / 정렬', () => {
  it('test 버블 정렬()', () => {
    expect(BubbleSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('test 선택 정렬()', () => {
    expect(SelectionSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('test 삽입 정렬()', () => {
    expect(InsertionSort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
