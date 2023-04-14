let arr1 = [1, 2, 3, 4]
let arr2 = [-1, 0, 15, 1]

const sumZero = (arr) => {
    let answer = false
    for (let i = 0; i<arr.length; i++) {
        for (j = i+1; j<arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                answer = true
            }
        }
    }
    console.log(answer)
}

// sumZero(arr1)
// sumZero(arr2)

//runtime would be 0(n) we are running over the array n amount of times while n is the array length.

//space complexity would be 0(n) because i am saving the answer as a boolean

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
let str1 = "bob"
let str2 = "randy"
let str3 = "abcdefghijklmnopqrstuvwxyz"


const uniqueChars = (str) => {
    let letters = []
    let isunique = true
  
    for(let i = 0; i < str.length; i++){
      if(letters.includes(str[i])){
        isunique = false
      } else {
        letters.push(str[i])
      }
    }
  
    console.log(isunique)
  }

//   uniqueChars(str1)
//   uniqueChars(str2)
//   uniqueChars(str3)

//I think runtime would be 0(n) we are still running over the string n amount of times while in is the string length.

//space complexity would be 0(n) because im saving the answer as a boolean

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


const isPangram = (str) => {
    let alphabet ="abcdefghijklmnopqrstuvwxyz".split('')
    let isaPangram = true

    for (let i = 0; i <alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) < 0){
            isaPangram = false
        }
    }
    console.log(isaPangram)
}

// isPangram("The quick brown fox jumps over the lazy dog!")
// isPangram('not a pangram')

//I think runtime would be 0(n) we are running over the string length using .indexOf and the alphabet length as well. 
// but the alphabet length is 0(1) because it is preset.

//space complexity would be 0(n) because im saving the answer as a boolean

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const longerWord = (string1, string2) => {
    if (string1.length > string2.length) {
        console.log(string1.length)
    } else {
        console.log(string2.length)
    }
}

longerWord('apple', 'pie')
longerWord('happy', 'liopleurodon')

//this would be 0(1) we are only running 2 operations regardless of how long the strings are.

//space complexity would be 0(1)

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

