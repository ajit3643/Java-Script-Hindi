// Creating strings
// Strings can be created as primitives, from string literals, or as objects, using the String() constructor:

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

const name =  "Ajit";
const repoCount = 10;

console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(name.length);
console.log(name.charAt(0));
console.log(name.indexOf('t'));

console.log(name.toUpperCase());
let newName = name.concat( " Kumar");
console.log(newName.length);
console.log(newName);

// String Length
// To find the length of a string, use the built-in length property:

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
/*
Extracting String Characters
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
*/ 
// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:

let char = text.charAt(5);
console.log(char);

/*
Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
JavaScript String slice()
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position (end not included).
*/ 

let part = text.slice(7, 13);


/*
String Methods
1. concat()
The concat() method is used to join two or more strings.
This method does not change the existing strings, but
returns a new string containing the text of the joined
strings.

2. endsWith()
The endsWith() method determines whether a string ends
with the characters of a specified string. This method
returns true if the string ends with the characters, and
false if not.

3. fromCharCode()
The fromCharCode() method converts Unicode values into
characters. This is a static method of the String object,
and the syntax is always String.fromCharCode()

4. includes()
The includes() method determines whether a string
contains the characters of a specified string.

5. indexOf()
The indexOf() method returns the position of the first
occurrence of a specified value in a string. This method
returns -1 if the value to search for never occurs.

6. lastIndexOf()
The lastIndexOf() method returns the position of the last
occurrence of a specified value in a string. The string is
searched from the end to the beginning, but returns the
index starting at the beginning, at position 0.

7. localeCompare()
The localeCompare() method compares two strings in the
current locale. The locale is based on the language
settings of the browser.
Returns -1 if str1 is sorted before str2
Returns 0 if the two strings are equal
Returns 1 if str1 is sorted after str2

8. match()
The match() method searches a string for a match against
a regular expression, and returns the matches, as an Array
object.

9. repeat()
The repeat() method returns a new string with a specified
number of copies of the string it was called on.

10. replace()
The replace() method searches a string for a specified
value, or a regular expression, and returns a new string
where the specified values are replaced.

11. slice()
The slice() method extracts parts of a string and returns
the extracted parts in a new string.

12. search()
The search() method searches a string for a specified
value, and returns the position of the match.

13. startsWith()
The startsWith() method determines whether a string
begins with the characters of a specified string.

14. split()
The split() method is used to split a string into an array of
substrings, and returns the new array.

15. substring()
The substring() method extracts the characters from a
string, between two specified indices, and returns the new
sub string.

16. substr()
The substr() method extracts parts of a string, beginning
at the character at the specified position, and returns the
specified number of characters.

17. toLocaleUpperCase()
The toLocaleUpperCase() method converts a string to
uppercase letters, according to the host's current locale.

18. toLocaleLowerCase()
The toLocaleLowerCase() method converts a string to
lowercase letters, according to the host's current locale.

19. toUpperCase()
The toUpperCase() method converts a string to uppercase
letters. It does not change the original string.

20. toLowerCase()
The toLowerCase() method converts a string to lowercase
letters. It does not change the original string.

21. trim()
The trim() method removes whitespace from both sides of
a string. It does not change the original string.


*/





