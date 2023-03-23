// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  console.log("Hey! Please create your passwod.")

  // 1. Prompt the user for password length between 8 > 128 characters
  var passwordLength = prompt("Please create a password between 8 and 128 characters long.")
  // 2. Ask for special characters
  var charType = prompt("Please choose either of these character types: special, numeric, uppercase, lowercase")
  // 3. Validate the input
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if (charTypeLower === "lowercase") {
    charSet = "abcdefghijklmnopqrstuvwxyz"
  } 
  // 4. Generate the password based on the criteria
 



  return "Password generated by you will go here!"

//   if (passwordLength > 128 || passwordLength < 8) {
//     alert("Sorry, your password is either too long or too short :[")
//     return
//   }
//   var charType = confirm("Do you want lowercase characters?")

//   var charSet = " ";
//   var charTypeLower = charType.toLowerCase();

}

// 6. Display password to the page
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

