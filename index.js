/**
 * Appends an element or multiple elements to the end of an array
 * @param {Any[]} an array containing any kind of elements
 * @param {Any} an element of any kind
 *
 * @returns {number} the new length of the array.
 */

function myPushFunction(array, element) {
  array[array.length] = element;

  return array.length;
}

module.exports = {
  myPushFunction,
};
