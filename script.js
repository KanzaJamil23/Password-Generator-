// Assignment code here
var generateBtn = document.querySelector("#generate");

// Character Options
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', "%", '^', '&', '*', '(', ')', '_','-','+'];

// Prompt Questions
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose the length of your password between 8 and 128 characters");
    var askUpperCase = confirm("Would you like your password to include Uppercase");
    var askLowerCase = confirm("Would you like your password to include Lowercase");
    var askNumbers = confirm("Woud you like your password to include numbers");
    var askSpecial = confirm("Would you like your password to include special characters");
    var responses = {
      length: length,
      askUpperCase: askUpperCase,
      askLowerCase: askLowerCase,
      askNumbers: askNumbers,
      askSpecial: askSpecial
    } 


    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!askUpperCase)&&(!askLowerCase)&&(!askNumbers)&&(!askSpecial))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}

// Creating the Password
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.askUpperCase) {
    for (var i of uppercase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lowercase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }
 console.log(possibleCombo);

for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 