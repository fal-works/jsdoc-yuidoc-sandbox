/**
 * @class Main
 */

/**
 * @method doSomething
 * @param {Number} arg Argument of number type.
 * @return {Number} The given argument.
 */
function doSomething(arg) {
  return arg;
};

/**
 * @method doSomethingWithNumbers
 * @param {Array<Number>} arg An array of numbers.
 * @return {Array<Number>} The given argument.
 */
function doSomethingWithNumbers(arg) {
  return arg;
};

/**
 * @method doSomethingGenerics
 * @param {T} arg Argument of any type.
 * @return {T} The given argument.
 */
function doSomethingGenerics(arg) {
  return arg;
};

/**
 * @method doSomethingWithCallback
 * @param {Function} arg Argument of any type.
 */
function doSomethingWithCallback(arg) {
};

module.exports = {
  doSomething,
  doSomethingWithNumbers,
  doSomethingGenerics,
  doSomethingWithCallback
};

const resultNumbers = doSomethingWithNumbers([1, 2]);
const resultGenerics = doSomethingGenerics("a");
