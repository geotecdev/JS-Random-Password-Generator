// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var password = "";
  var passwordText = document.querySelector("#password");

  //set generated password as content
  passwordText.value = password;

  
  //choose number of characters between 8 and 128
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
      if (charCount != null && (charCount === 0 || isNaN(charCount))) {
        alert("please enter a valid number");
      }
      else if (charCount < 8 || charCount > 128) {
        alert("character count must be between 8 and 128");
      }
      else {
        isValid = true;
      }
    }
    
    return charCount;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

