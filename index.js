// Iteration 1: Names and Input
const hacker1 = "Vanessa";
const hacker2 = "Deborah";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
let name1 = hacker1.length;
let name2 = hacker2.length;
if ( hacker1.length > hacker2.length) {
    console.log( `It seems that the navigator has the longest name, it has ${name1} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`The driver has the longest name, it has ${name2} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${name1} characters!`);
}
// Iteration 3: Loops
// console.log(hacker1.split('').join('' '').toUpperCase());
let result = ' ';
for( i = 0; i < hacker1.length; i++) {
    hacker1[i];
    result += hacker1[i].toUpperCase() + ' ';
}
// console.log(result);
let wordReversed = "";
for ( let i = hacker2.length -1; i >= 0; i--) {
    const char = hacker2[i];
    wordReversed += char;
}
console.log(wordReversed);
if ('hacker1'.localeCompare('hacker2') === 1) {
    console.log("The driver's name goes first.");
    } else if ('hacker1'.localeCompare('hacker2') === -1) {
        console.log("Yo, the navigator goes first definitely");
    } else {
        console.log("What?! You both have the same name?");
    }
    let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium magna aliquam urna interdum accumsan. Integer vel ante sit amet metus gravida tempus at eget orci. Nulla venenatis leo eget eros rutrum sagittis. Ut posuere lobortis sodales. Sed elit nisi, dictum sit amet enim et, tincidunt dictum nunc. Donec interdum massa quis tincidunt elementum. Morbi porta quam ut lectus sodales, nec convallis metus aliquet. Donec convallis, leo eget vestibulum mattis, odio nulla tempor tortor, sed condimentum augue tortor quis felis. In a ultrices nisl. In convallis libero vitae laoreet suscipit. Phasellus in eros eget nisi pretium viverra. Etiam a posuere mauris. Aenean pulvinar sollicitudin dolor. Phasellus at maximus mauris. Sed neque tellus, suscipit ac libero eget, feugiat semper orci. Morbi fringilla rutrum erat, ut lobortis ipsum euismod non. Praesent sed nunc ut est congue faucibus vitae sed turpis. Maecenas dolor libero, suscipit nec elementum non, interdum bibendum enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi consectetur felis et semper ultrices. Nam maximus dui purus, nec pellentesque mi elementum ac. Etiam vel nulla et nibh rutrum pretium. Nullam dignissim mi purus, quis ultrices orci tempor commodo. Phasellus tristique augue id lacus pharetra, laoreet bibendum tellus egestas. Duis orci tortor, bibendum eget convallis vel, efficitur ut leo. Nunc suscipit erat eu ante dignissim viverra. Cras tempor et augue nec elementum. Integer sagittis augue a dui blandit venenatis at rutrum diam. Suspendisse pellentesque porta nisi eget fermentum. Donec in fringilla tellus. Aenean id cursus arcu, quis malesuada nisi. Vestibulum placerat nisl id dictum facilisis. Suspendisse ut hendrerit nulla. Nunc vitae rutrum arcu, suscipit vehicula elit. Aliquam dapibus neque tristique diam semper vulputate. Vestibulum facilisis blandit turpis, nec imperdiet dui tempor ac.'
    console.log(longText.length);
let count = (longText.match(/et/g) || []) .length;
console.log(count);
let phraseToCheck = "Hello world";
function checkPalindrome (phraseToCheck) {
    const len = phraseToCheck.length;
    for ( let i= 0; i < len /2; i++) {
      if (phraseToCheck[i] !== phraseToCheck[len - 1 - i]) {
        console.log("it is not a palindrome");
      }
    }
    console.log("it is a palindrome");
}
const phareToCheck = "Hello world";
const value = checkPalindrome(phraseToCheck);
