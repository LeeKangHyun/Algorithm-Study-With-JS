const setArr = new Set<number>();
const MAX_SIZE = 10_000;

let i = 0;
while (i < MAX_SIZE) {
  const random: number = Math.floor(Math.random() * MAX_SIZE);
  setArr.add(random);
  i += 1;
}

export default Array.from(setArr);
