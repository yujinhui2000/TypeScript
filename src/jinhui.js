const double = (x) => x * 2;
const selfMultiplication = (x) => x * x;
const addOne = (x) => x + 1;

const composeOrigin =
  (...fns) =>
  (...args) =>
    fns.reduceRight((val, fn) => fn.apply(null, [].concat(val)), args);

const composeConvert =
  (...fns) =>
  (...args) =>
    fns.reduce((val, fn) => fn.apply(null, [].concat(val)), args);

const composeNoApply =
  (...fns) =>
  (...args) =>
    fns.reduce((val, fn) => fn(...[].concat(val)), args);

const compositeOrigin = composeOrigin(addOne, double, selfMultiplication);
const compositeConvert = composeConvert(addOne, double, selfMultiplication);
const compositeNoApply = composeNoApply(addOne, double, selfMultiplication);

console.log(compositeOrigin(2), compositeConvert(2), compositeNoApply(2));
