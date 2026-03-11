const func1 = (a, b) => (a > b ? a : b);

const func2 = (a, b, c) => func1(func1(a, b), func1(b, c));

const func3 = (func, a, b) => func(a, b);

console.log(func1(3, 5));
console.log(func2(7, 11, 8));
console.log(func3(func1, 8, 23));