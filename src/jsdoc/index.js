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
 * @template T
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

/**
 * @method doSomethingWithoutType
 * @param arg Argument of number type.
 * @return The given argument.
 */
function doSomethingWithoutType(arg) {
  return arg;
};

module.exports = {
  doSomething,
  doSomethingWithNumbers,
  doSomethingGenerics,
  doSomethingWithCallback,
  doSomethingWithoutType
};

const resultNumbers = doSomethingWithNumbers([1, 2]); // type will be number[]
const resultGenerics = doSomethingGenerics("a"); // type will be "a"
