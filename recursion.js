/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (nums.length === i) return null;
  return nums[i] * product(nums, idx + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {

}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  let newStr = "";
  if (str.length === i) return null;
  newStr += str[idx];
  return everyOther(str, i + 2, newStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (str[leftIdx] !== str[rightIdx]) return false;
  if (leftIdx >= rightIdx) return true;
  return isPalindrome(str, idx + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0) {
  let newStr = "";
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - i];
  return revString(str, i + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
