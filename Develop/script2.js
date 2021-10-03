var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(lowerCaseLetters)
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
console.log(upperCaseLetters)
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["!", "@", "$", "%", "^", "&", "*"]



function getRandomPositionInArray(arrayLength) {
    var randomNumber = Math.random();
    var randomValue = randomNumber * arrayLength;
    return Math.floor(randomValue);

}

function generateRandomLowerCaseLetter(passLength) {
    var passwordArray = []


    var randomPosition = getRandomPositionInArray(lowerCaseLetters.length);
    var randomLetter = lowerCaseLetters[randomPosition]
    passwordArray.push(randomLetter);


    console.log(passwordArray.join(""))


}

function generateRandomUpperCaseLetter(passLength) {
    var passwordArray = []
    var randomPosition = getRandomPositionInArray(upperCaseLetters.length);
    var randomLetter = upperCaseLetters[randomPosition]
    passwordArray.push(randomLetter);

    console.log(passwordArray.join(""))
}

function generateRandomNumber(passLength) {
    var passwordArray = []
    var randomPosition = getRandomPositionInArray(numbers.length);
    var randomNumber = numbers[randomPosition]
    passwordArray.push(randomNumber);

    console.log(passwordArray.join())
}

function generateSpecialChar(passLength) {
    var passwordArray = []
    var randomPosition = getRandomPositionInArray(specialCharacters.length);
    var randomNumber = specialCharacters[randomPosition]
    passwordArray.push(randomNumber);

    console.log(passwordArray.join(""))
}

function generatePassword() {
    var length = window.prompt("How many characters do you want?")
    console.log(length)
    var wantLowerCase = window.confirm("Do you want lowercase letters?")
    if (wantLowerCase = true) {
        generateRandomLowerCaseLetter(length)
    }
    var wantUpperCase = window.confirm("Do you want uppercase letters?")
    if (wantUpperCase = true) {
        generateRandomUpperCaseLetter()
    }
    var wantNumbers = window.confirm("Do you want numbers?")
    if (wantNumbers = true) {
        generateRandomNumber()
    }
    var wantSpecialCharacters = window.confirm("Do you want special characters?")
    if (wantSpecialCharacters = true) {
        generateSpecialChar()
    }

    for (let i = 0; i < length; i++)


}
generatePassword()


