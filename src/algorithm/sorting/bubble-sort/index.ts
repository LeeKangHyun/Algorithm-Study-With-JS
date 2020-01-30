console.time('BubbleSort');
export const BubbleSort = (arr: number[] = []): number[] => {
  const len = arr.length;
  // swapped 플래그 생성
  let swapped = false;

  /*
   * swapped 이 일어나지 않을 때 까지 계속 실행시킨다.
   * 한 번 이상 돌아야 하기 때문에 do ... while 로 작성한다.
   */
  do {
    swapped = false;

    for (let i = 0; i < len; i += 1) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};
console.timeEnd('BubbleSort');
