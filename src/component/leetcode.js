// I defined a function named palChecker that takes a string (str) as an argument
const palChecker = (str) => {
    // This will create an empty string named reversedStr to store the reversed version of the input string
    let reversedStr = '';
  
    // Using a loop to go through each character of the input string from the last one to the first
    for (let i = str.length - 1; i >= 0; i--) {
      // Add each character to the reversedStr string
      reversedStr += str[i];
    }
  
    // Check if the reversedStr is equal to the original string (str)
    if (reversedStr === str) {
      // If they are equal, return true
      return true;
    } else {
      // If they are not equal, return false
      return false;
    }
  };
  
  // Here I created a variable named test and assign the string 'madam' to it
  const test = 'madam';
  
  // This statement calls the palChecker function with the argument test ('madam') and print the result to the console
  console.log(palChecker(test));
  