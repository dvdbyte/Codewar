//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const nums = [1,2,3,4,5]

let sum = 0
// for(let i = 1; i < nums.length + 1; i++){
//   console.log(sum += i)
// }

// console.log(nums.reduce((acc, c) => acc + c, 0))

//Create a function that takes in an array of numbers

//Return a new array of numbers that is every original number squared

function numbers (arr) {
  let newArr = []

    arr.forEach(element => {
    newArr.push(element * element)
  })
  return newArr
}

console.log(numbers([2, 3, 4, 5]))
//Create a function that takes string
//Print the reverse of that string to the console
function revStrng(str){
  return str.split('').reverse()
}

console.log(revStrng('Jinadu'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str){
  let st = str.split('').join('')
  let revSt = str.split('').reverse().join('')
    if (st === revSt){
      console.log('The string is a palindrome')
    }else{
      console.log('not a palindrome')
    }
}
console.log(palindrome('ololo'))