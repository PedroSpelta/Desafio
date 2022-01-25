export const getPaintCanBySize = (liters: number) => {
  const cans = [0, 0, 0, 0];
  for (let l = liters; l > 0; ) {
    if (l >= 18) {
      cans[3] += 1;
      l -= 18;
    }
    if (l >= 3.6) {
      cans[2] += 1;
      l -= 3.6;
    }
    if (l >= 2.5) {
      cans[1] += 1;
      l -= 2.5;
    }
    if (l) {
      cans[0] += 1;
      l -= 0.5;
    }
  }
  return cans;
};
