const solution = (arr, k) => k % 2 !== 0 ? arr.map(i => i * k) : arr.map(i => i + k);
