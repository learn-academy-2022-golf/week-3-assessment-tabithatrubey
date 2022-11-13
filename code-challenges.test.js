// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("greaterNum", () => {
  it ("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(greaterNum(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(greaterNum(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  }
  )
}
)
// ReferenceError: greaterNum is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// Pseudocode:
// Create a function called greaterNum
// The function has one parameter 'n' that indicates the number that will be passed into the function
// Create a variable fib to identify the numbers we already know in the sequence, 1 and 1.
// Create a conditional statement to determine if:
  // Identify of the input is set at the value of greater than 2
    // if the number is greater than 2 create a for loop to iterate through the array of the given number until we have the index of the given number.
      // We know that the index will start at the index of 2 since the first two numbers are already given to us and their indexes are 0 and 1 respectively. 
    // For each iteration, we want to populate the index of i so fib at the index of i is set to the previous two numbers added together.
      // Return this value of fib
  // If the number is 2 or lower
    // return "No way, Jose"

  const greaterNum = (n) => {
    let fib = [1,1]
    if (n>2)
    for (let i=2; i<n; i++) {
      fib[i] = fib[i-1] + fib[i-2]}
    return fib
    if (n<2) {
      return "No way, Jose"
    }
  }
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total
  // So, the test passed and works partially in a separate terminal. When I log a number less than 2 I still get an array of the same length as the number I input. If I didn't add a conditional statement to the function, then I would feel more confident. However, I tried adding curly brackets after line 51, but I still get an unexpected error and I can't move line 48 above 47 because the variable has to be defined inside the function first. Is a conditional necessary for this?


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("studyTime", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest.", () => {
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
  }
  // Expected output: [15, 15, 20, 30, 30, 60, 90]
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
  }
// Expected output: [10, 15, 20, 45, 60, 65, 100]
  expect(studyTime(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
  expect(studyTime(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
})
}
)
// ReferenceError: studyTime is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total

// Psuedocode:
// Create a function called studyTime
// Has one parameter:an object
// Declare a variable orderedTime that is set at the Object.values to initially list out all the elements in the input array.
  // Use the .sort() method to sort the array from smallest to largest 
      // The .sort() method will automatically sort the numbers in the array from smallest to largest, with one caveat. .sort recognizes 100 as larger than 20 becuase it compares first character to first character (1 > 2). Thus, to fix this, we have to use the compare function. The compare function compares two VALUES at a time (a, b). If we were to compare 50 and 100, the sort method would subtract a from b 50 -100  and would return a negative number, which sort() would then recognize 50 as the lower number.

const studyTime = (object) => {
let orderedTime = Object.values(object).sort(function(a, b) {return a - b})
return orderedTime}

// }Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("newArray", () => {
  it ("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = []
    // Expected output: []
    expect(newArray(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(newArray(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(newArray(accountTransactions3)).toEqual([])
  }
  )
}
)
//ReferenceError: newArray is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total

// Pseudocode:
// Create a function: newArray 
// Has one parameter: an array 
// Since we want to update every element in the array and return an array of the same length, we will use the .map() method
// We are iterating through every element, as indicated above, and trying to find the accumulating sum of 2 values (first value + second value, that value plus the third value, and so on)
  // Use the cumulativeSum function: (sum => value => sum += value) 
    // It is especially important to set the sum to zero at the end of the function so that every time sum is called on, it will update to be the become the previous value. 

  const newArray = (array) => {
    return array.map((sum => value => sum += value)(0))
  }
  // var myarray = [5, 10, 3, 2];
  // var new_array = [];
  // myarray.reduce(function(a,b,i) { return new_array[i] = a+b; },0);

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total