// Assignment code here

// Prompts the user to enter code length.
// if the inputs are not sufficient, function will continue prompting the user to provide the correct input.
function charactersLength(){
  while(1){
    var length = prompt("Please create a password between 8 and 128 characters long. Default is 8");
    if (length == ""){
      length = 8;
      return length;
    }
    if (length > 8 && length < 128 && !isNaN(length)){
      return length;
    }
    else{
      alert("Try again");
    }
  }
}

// getChoice creates usage flags of chosen characters
function getChoice()
{
  var choice = ""; // the whole character set string will "luns" l stands for lower case, u - upper case and etc.
  while(choice == ""){
    var lower = confirm("Do you want to include lowercase characters?");
    if (lower == true){choice += "l"};
    var upper = confirm("Do you want to include uppercase characters?");
    if (upper == true){choice += "u"};
    var number = confirm("Do you want to include numeric characters?");
    if (number == true){choice += "n"};
    var special = confirm("Do you want to include special characters?");
    if (special == true){choice += "s"};
    }
  return choice;
}
// based on a flag string, function will choose which character pools to use.
function generateMegaChar(choice)
{
  lowerChar = "abcdefghijklmnopqrstuvwxyz";
  upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numberChar = "0123456789";
  specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  megaChar = "";  
  console.log(megaChar)
  choice.includes("l") ? megaChar+=lowerChar : ""
  console.log(megaChar)
  choice.includes("u") ? megaChar+=upperChar : ""
  console.log(megaChar)
  choice.includes("n") ? megaChar+=numberChar : ""
  console.log(megaChar)
  choice.includes("s") ? megaChar+=specialChar : ""
  console.log(megaChar)
  return megaChar;
}

// based on sellected length and total character pool use, function generates a password of random characters, generated by math random.
function generatePassword(length,charPool) {
  var passwordString ="";
  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * charPool.length);
    passwordString += charPool.substring(randomNumber, randomNumber +1);
   }
    return passwordString;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var length = charactersLength();
  var choice = getChoice();
  console.log(choice)
  var charPool = generateMegaChar(choice)
  var password = generatePassword(length,charPool);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

