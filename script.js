// Error 1: typing message must match in console log
let message = 'Welcome to the debugging exercise!';
console.log(message); 

// Error 2: In the html there's an ID action button so we must use # instead of .
console.log(document);
let button = document.querySelector('#actionButton'); 
button.addEventListener('click', eventHandler); 


// Error 3: 
function eventHandler() {
  console.log('Button clicked');
  displayOutput();
}

// Error 4: 
function displayOutput() {
  let output = document.querySelector('#output'); 
  output.innerText = 'You clicked the button!';
}

let localMessage = "Initial Message"
// Error 6: variable scope misuse
// To fix the misuse of variable scope, we declare let initial message prior to function, so outside
function updateMessage() {
  let localMessage = 'Updated message';
}
updateMessage();
console.log(localMessage); 

// Error 7: testButton doesn't exist in html so we'll create it to fix null
document.getElementById('testButton').addEventListener('click', testFunction());

function testFunction() {
  console.log('Test function executed');
}

// Error 8:
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 - number2));

// Error 9: Similar to error 7. Also Null element should be empty string and don't call length
let nullVar = '';
console.log(nullVar);

// Error 10: casesensitive must match
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar);

// Error 11: Quotations are not required line 55
let importantData =
  "This string must be logged to the console. It's important!";
console.log(importantData);

// Error 12: 
// tryToCallFunction(); is Not defined

// Error 13: Fix typo extra e
let user = { name: 'Alice' };
console.log(user.name)

// Error 14: toUpperCase doesn't exist
let someNumber = 123;
console.log(someNumber); 

// Error 15: var, let, and const are the 3 main syntaxes used to declare variables in JS
// Each comes with different scope. let strings require quotes " "
let greeting = "Hello, world!";

// Error 16: i is not defined. Semicolon ends loop so we remove ;
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Error 17: else statement requires closing curly bracket. Two = signs checks for content
let five = '5';
if (five === 5) {
    console.log('Five is equal to 5'); // This one should be logged
} else {
    console.log('Five is not equal to 5'); 
}
// Error 18:
Array.prototype.push = function() {
    console.log('Array push method is overwritten');
};
let numbers = [];
numbers.push(1);
console.log(numbers);

// Error 19: log should be after x
x = 5;
console.log(x);

// Error 20: we can't add property here to an obhjecy
let myString = 'Hello World';
console.log(myString);

