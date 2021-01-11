// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {

  //propmt user to choose a number of characters between 8 and 128
  var charCount = getCharCount();

  //if char count is null (because user pressed cancel) exit function
  if (charCount === null) {
    return;
  }

  //include lowercase y/n
  var hasLowercase = confirm("include lower case letters?");

  //include uppercase y/n
  var hasUppercase = confirm("include upper case letters?");

  //include numeric y/n
  var hasNumbers = confirm("should password include numbers?");

  //include special chars y/n
  var hasSpecialChars = confirm("should password include special characters?");

  //call generatePassword function with input as args
  var password = generatePassword(charCount, hasLowercase, hasUppercase, hasNumbers, hasSpecialChars);

  //set generated password as content
  passwordText.value = password;
}

//prompt and validation functions //////////////////
//char count func
function getCharCount() {
    var charCount = 0;
    var isValid = false;
  
    while (!isValid)
    {
      charCount = prompt("How many characters should your password include? (number between 8 and 128)");
  
      //if user clicks cancel, exit function & return null
      if (charCount === null) {
        isValid = true;
        return charCount;
      }
  
      //parse number and continue validation
      charCount = parseInt(charCount);
      //make sure number entry is numeric
      if (charCount != null && (charCount === 0 || isNaN(charCount))) {
        alert("please enter a valid number");
      }
      //make sure numeric input is in the proper range
      else if (charCount < 8 || charCount > 128) {
        alert("character count must be between 8 and 128");
      }
      else {
        isValid = true;
      }
    }
    
    return charCount;
  }


//generatePassword func
function generatePassword(charCount, hasLowercase, hasUppercase, hasNumbers, hasSpecialChars) {
  var password = "";

  var lcChars = "abcdefghijklmnopqrstuvwxyz";
  var ucChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numChars = "0123456789";
  var specialChars = "~!@#$%^&*?";

  //concat list of valid chars for password based on arguments passed in
  var allChars = "";
  if (hasLowercase) {
    allChars += lcChars;
  }
  if (hasUppercase) {
    allChars += ucChars;
  }
  if (hasNumbers) {
    allChars += numChars;
  }
  if (hasSpecialChars) {
    allChars += specialChars;
  }

  //if concat string is empty, alert user that they need to select at least 1 type
  if (allChars === "") {
    alert("no character types were choosen. You need to select 'yes' for at least one character type. Please reset password criteria.");
    return password;
  }

  //generate random password
  for (var i = 0; i < charCount; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

