// Assignment Code
var generateBtn = document.querySelector("#generate");

//var uppercaseLetters = ["A","B","C","D""E]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(lowerCaseLetters)
var specialCharacters = ["!"]
//var totalCharacters = [0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$ ^&():/]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  //what is the length?
  var length = window.prompt("Choose the length of your password. It must be at least 8 characters and no more than 128 characters.");
  console.log(length)
  if (length >= 8 && length <= 128) {

  }
  else {
    //error message
    window.alert("Please make sure your password length is between 8 and 128 characters")
    writePassword()
  }
  //what type of characters?
  var characterTypes = window.prompt("What type of characters would you like for your password? They can be lowercase, uppercase, numeric, and/or special characters.");
  console.log(characterTypes)
  if (characterTypes == "lowercase") {

  }
  else {
    window.alert("Try again!")
    writePassword()
  }

  //functions for password generation
  function getRandomPositionInArray(arrayLength) {
    var randomNumber = Math.random();
    var randomValue = randomNumber * arrayLength;
    return Math.floor(randomValue);

  }

  function generateRandomLowerCaseLetter() {
    var randomPosition = getRandomPositionInArray(lowerCaseLetters.length);

    return lowerCaseLetters[randomPosition]

  }

  return generateRandomLowerCaseLetter
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//window.alert("This is a random password generator! In the following windows you will be asked a series of criteria.");

//window.prompt("How many characters would you like your password to be?")





/**
 *1- If the user wants special characters, generate a random special character, and add it to the password.
 * 2- If user wants uppercase letters, generate random uppercase letter, and add to password.
 * 3-If user wants lowercase letters, generate random lowercse letter, and add to the password.
 * 4-If user wants numbers,generate a random number, and add it to password.
 *
 *
 * While password length is lower than the desireds length:
 * -Randomly choose the type of character that will be generated from the user's choices.
 * -Generate a random character of that type and add it to the password.
 */

function getRandomPositionInArray(arrayLength) {
  var randomNumber = Math.random();
  var randomValue = randomNumber * arrayLength;
  return Math.floor(randomValue);

}

function generateRandomUpperCaseLetter() {
  var upperCaseLetters = ["A", "B", "C", "D"];

  var randomPosition = getRandomPositionInArray(upperCaseLetters.length);

  return upperCaseLetters[randomPosition];

}


function generateRandomLowerCaseLetter() {
  var randomPosition = getRandomPositionInArray(lowerCaseLetters.length);

  return lowerCaseLetters[randomPosition]

}