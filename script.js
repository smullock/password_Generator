// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperCasedCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
const minimumCharacterLength = 8;
const maximumCharacterLength = 128;
passwordlength = 8;



generateBtn.addEventListener("click", writePassword);


//ask the user how many characters, type of characters, upper, lower case
function askInput()

passwordlength=window.prompt("How many characters would you like your password to contain"); 

 //if user selects cancel the dialog box closes
  if(!passwordlength){
    return;
  }

  else if (passwordlength<minimumCharacterLength|| passwordlength>maximumCharacterLength) window.alert ("Password must be a minimum of 8 or a Maximum of 128 Characters, Please try again");
  return false;


  var incSpecialCharacters = window.confirm ("Click OK if you want to include special characters?");

  var incNumerical = window.confirm ("Click OK if you want to include Numbers?");
  var incLowerCase = window.confirm ("Click OK if you want to include Lower Caase?");
  var incUpperCase = window.confirm ("Click OK if you want to include Upper Case?");


  console.log(characterlength);
  console.log(incSpecialCharacters);
  console.log(incNumerical);
  console.log(incLowerCase);
  console.log(incUpperCase);

  
//Generate Password
function generatePassword(){
var password = "";
for (var i=0; i < password; i++){


var randomPassword =Math.floor(Math.random() *password.length) 
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
}