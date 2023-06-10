/*In this simple exercise, you will build a program that takes a value, 
integer , and returns a list of its multiples up to another value, limit . 
If limit is a multiple of integer, it should be included as well. 
There will only ever be positive integers passed into the function, 
not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), 
the function should return [2, 4, 6] as 2, 4, and 6 
are the multiples of 2 up to 6.*/

// Solutions

function listMultiples(int, limit){
  let result =[];
  for (let i = int; i<= limit; i+= int){
    result.push(i)
  }
  return result
}

console.log(listMultiples(12, 144))

/**
 * Array plus array

 * I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
 */

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}
console.log(arrayPlusArray([2,4,5], [1,6,9]))

function arrayPlusArray(arr1, arr2) {
  var suma=0;
  for(var i=0;i<arr1.length;i++)
    suma+=arr1[i];
  for(var i=0;i<arr2.length;i++)
    suma+=arr2[i];
  return suma;
}

/** 
 * Get the mean of an array
 * 
 * 
 * It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty. */

function getAverage(marks){
  let divisor = marks.length
  let total = marks.reduce((ac, c) => ac + c, 0 )
  let result = Math.floor(Number(total / divisor))
  return result
}

console.log(getAverage([16,18,14,5,11,16,9,14,4,7,3,14]))

/**Beginner - Reduce but Grow
 * Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 * 
 */

function grow(x){
  let product = 1;
  x.forEach(element => {
   product *= element
  });
  return product
}
console.log(grow([3,8,6,3,1]))

/**
 * 
 * This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
 "1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL

*/

function array(string) {
  let arr = string.split(',')
  return arr.slice(1, -1).join(',') || null

  }
console.log(array("1,6,8,3,4"))

/**
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
 */

function invert(array) {
  return array.map( element => element * (-1))

}
console.log( invert([1,3,-8, -4,7]))