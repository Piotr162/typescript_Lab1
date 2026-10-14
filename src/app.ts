import { Calculator } from './calculator.ts';

const course: string = 'ZPSM';
const year: number = 2026;

console.log(`${course} ${year} - environment is up`);

const calc = new Calculator([2, 'seven', 4, null, 8]);

console.log(calc.add());
console.log(calc.multiply());
console.log(calc.min());
console.log(calc.max());
console.log(calc.mean());