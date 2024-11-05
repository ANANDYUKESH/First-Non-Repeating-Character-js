function firstNonRepeatingCharacter(a) {
  const count = {}; // declare an object
  for (let i = 0; i < a.length; i++) { // first loop to visit characters in the string
    const char = a[i];
    count[char] = (count[char] || 0) + 1; // increment count if already present
  }
  for (let i = 0; i < a.length; i++) { // second loop to find the first non-repeating character
    if (count[a[i]] === 1) { // if count is 1, return the character a[i]
      return a[i];
    }
  }
  return null; // return null if no non-repeating character is found
}

const word = "swiss";
const result = firstNonRepeatingCharacter(word); // call function with 'word'
console.log("First non-repeating character is: " + result); // output the result

