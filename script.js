// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperCasedCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
const minimumCharacterLength = 8;
const maximumChatacterLength = 128;

//ask the user how many characters, type of characters, upper, lower case
function askInput(){
  var characterlength =window.prompt ("How many characters would you like your password to contain"); //add if null, then exit and if greater then and less then character length
 //user selects cancel
  if(!characterlength){
    return;
  }
  else if (characterlength<minimumCharacterLength) window.prompt ("Password must be a minmum of 8 Characters")

  var incSpecialCharacters = window.confirm ("Click OK if you want to include special characters?");
  var incNumerical = window.confirm ("Click OK if you want to include Numbers?");
  var incLowerCase = window.confirm ("Click OK if you want to include Lower Caase?");
  var incUpperCase = window.confirm ("Click OK if you want to include Upper Case?");


  console.log(characterlength);
  console.log(incSpecialCharacters);
  console.log(incNumerical);
  console.log(incLowerCase);
  console.log(incUpperCase);

}
  
//Generate Password
function generatePassword(){

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// How many characters would you like your password to contain( input windows box) ( if number is less than 8 or greater then 128, tell pw must be 8 characters)
//
//length of password >= 8 and <=128

//click ok if you want to inlcude special charaters - t o f - if ok then
//click ok if you want to use numerical
//click ok if you want to use lower case
//click ok if you want to use upper case
//
//type of character

//
