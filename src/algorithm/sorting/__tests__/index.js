import { BubbleSort } from '../bubble-sort';

const arr = [9, 3, 1, 2, 4, 7, 8, 5, 6];

describe('알고리즘/정렬', () => {
  it('버블 정렬', () => {
    expect(BubbleSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
