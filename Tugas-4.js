const arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

const map1 = arr.map((x) => x ** 2);
console.log(map1);

const map2 = arr.filter((x) => x % 2 !== 0);

console.log(map2);