const name = "ruthvik";
const rolno = 72;
//write the syntax like this only
console.log(`his name is ${name} and his roll no is ${rolno}`); //string interpolation

const newname = "abhi" //this is a string object which is diff from string
console.log(newname.length); //prints length of the string

console.log(newname[3]) //can access the indexes of the string obj

console.log(newname.toUpperCase());
console.log(newname.toLowerCase());

console.log(newname.charAt(2)); //prints the character at index 2
console.log(newname.indexOf("b")); //prints the index of the first occurrence of "b"

console.log(newname.substring(0,2)); //prints the first 2 characters based on the index
console.log(newname.slice(-4,2)); //DOUBT


console.log(newname.split("b")); //splits the string into an array at each occurrence of "b" , it removes the "b" from the string and returns the array of substrings

console.log(newname.replace("b", "c")); //replaces the first occurrence of "b" with "c"
console.log(newname.replaceAll("b", "c")); //replaces all occurrences of "b" with "c"

console.log(newname.trim()); // if newname is "   abhi   " , it removes the whitespace from both ends of the string
//can also use trimStart() and trimEnd() to remove whitespace from the start and end of the string respectively

console.log(newname.includes("bhi")); //checks if "bhi" is present in the string, returns true or false

console.log(newname.startsWith("ab")); //checks if the string starts with "ab", returns true or false
console.log(newname.endsWith("hi")); //checks if the string ends with "hi", returns true or false

console.log(newname.concat(" is a good boy")); //concatenates the string with " is a good boy"

console.log(newname.repeat(3)); //repeats the string 3 times abhiabhiabhi

console.log(newname.padStart(10, "0")); //pads the string with "0" at the start to make it 10 characters long
console.log(newname.padEnd(10, "0")); //pads the string with "0" at the end to make it 10 characters long


console.log(newname.localeCompare("abhi")); //compares the string with "abhi", returns 0 if they are equal, -1 if the string is less than "abhi", and 1 if the string is greater than "abhi"

