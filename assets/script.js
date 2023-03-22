// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passwordLength = prompt("Please create a password between 8 and 128 characters long.")
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Sorry, your password is either too long or too short :[")
    return
  }
  var charType = confirm("Do you want lowercase characters?")

function generatePassword() {
  var charSet = " ";
  var chartypeLower

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
