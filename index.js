/**
 * Appends an element to the end of an array. Do not use the push method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {Array[*]} element - an element of any kind.
 * @returns {number} the new length of the array.
 */

function myPushFunction(array, element) {
  array[array.length] = element;

  return array.length;
}

// A version that can handle multiple elements passed in. Just remove the .skip from the test spec!
function myPushFunctionAlt(array, ...values) {
  for (const value of values) {
    array[array.length] = value;
  }

  return array.length;
}

/**
 * Removes the last element of the array and returns the removed element, or undefined if the array is empty. Do not use the pop method.
 * @param {Any[]} array - an array of with any kind of elements.
 * @returns {Any} - the last element of the array
 */
function myPopFunction(array) {
  if (array.length === 0) {
    return undefined;
  }

  const element = array[array.length - 1];
  array.length--;

  return element;
}

/**
 * Determine whether an array includes a specific value within its entries. Do not use the includes method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @param {number} start - an index from which to start searching.
 * @returns {boolean} returns true or false if the searchElement is found in the array.
 */
function myIncludesFunction(array, searchElement, start = 0) {
  if (start !== undefined && start < 0) {
    start = array.length + start;
  }

  if (start === undefined) {
    start = 0;
  }

  for (let i = start; i < array.length; i++) {
    if (array[i] === searchElement) {
      return true;
    }
  }

  return false;
}

/**
 * Return the first index in an array where a specified value is found. Do not use the indexOf method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @param {number} start - an index from which to start searching.
 * @returns {number} returns the index at which the searchElement is found, or -1 if it is not found.
 */
function myIndexOfFunction(array, searchElement, start = 0) {
  if (start < 0) {
    start = array.length + start;
  }

  for (let i = start; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

/**
 * Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. Do not use the slice method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {number} [start] - an optional number representing the starting index of the extraction. The start can be negative.
 * @param {number} [start] - an optional number representing the ending index of the extraction (non-inclusive). The end can be negative.
 * @returns {Array[*]} returns a new array containing the extracted elements.
 */
function mySliceFunction(array, start = 0, end = array.length) {
  if (start < 0) {
    start = array.length + start;
  }

  if (end > array.length) {
    end = array.length;
  } else if (end < 0) {
    end = array.length + end;
  }

  const result = [];
  for (let i = start; i < end; i++) {
    result[result.length] = array[i];
  }

  return result;
}

/**
 * Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. Do not use the join method.
 * @param {Array[*]} array - an array of any kind of elements

 * @param {string} [separator] - an optional string to separate each pair of adjacent elements of the array. If no separator is specific the default separator should be a comma (",")
 * @returns {string} returns a new array containing the extracted elements
 */
function myJoinFunction(array, separator = ",") {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    const string = array[i];
    if (i === array.length - 1) {
      result += string;
    } else {
      result += string + separator;
    }
  }

  return result;
}

/**
 * Returns an array with the elements reverse. The first array element becomes the last, and the last array element becomes the first. Mutates the original array. Do not use the reverse method.
 * @param {Array[*]} array - an array of with any kind of elements
 * @returns {Array[*]} returns a new array with the elements reversed.
 */
function myReverseFunction(array) {
  for (let i = 0; i < array.length / 2; i++) {
    const opposite = array.length - i - 1;
    const temp = array[i];
    array[i] = array[opposite];
    array[opposite] = temp;
  }

  return array;
}

/**
 * Adds an element to the front of the array. Do not use the unshift method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} newElement - an element of any type to add to the front of the array.
 * @returns {number} returns the new length of the array.
 */
function myUnshiftFunction(array, newElement) {
  for (let i = array.length; i >= 0; i--) {
    if (i === 0) {
      array[i] = newElement;
    } else {
      array[i] = array[i - 1];
    }
  }

  return array.length;
}

// We do NOT have a solution here for the skipped "multiple elements" test. We'll update this repo once we tackle that one!
/**
 * Removes the first element of the array and returns the removed element, or undefined if the array is empty. Do not use the shift method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @returns {*} - the removed element
 */
function myShiftFunction(array) {
  if (array.length === 0) {
    return undefined;
  }

  const removed = array[0];
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length--;

  return removed;
}

module.exports = {
  myPushFunction,
  myPopFunction,
  myIncludesFunction,
  myIndexOfFunction,
  mySliceFunction,
  myJoinFunction,
  myReverseFunction,
  myUnshiftFunction,
  myShiftFunction,
};
