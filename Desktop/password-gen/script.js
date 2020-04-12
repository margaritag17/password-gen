
function generatePassword() {
  
  var lower = "abcdefghijklmnopqrstuvwxyz".split("");
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var number = [1,2,3,4,5,6,7,8,9,0];
  var special = ['!','@','#','$','%','&','*','.'];
  var password = "";

  
  //var generateButton = document.getElementById("generateBtn'")
//generateButton.addEventListener("click", writePassword);
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  var password = prompt("How many characters do you want for your password?");
  
}


special = confirm("Click OK to include special characters");


number = confirm("Click OK to include number characters");

lower = confirm("Click OK to include lowercase characters");

upper = confirm("CLick OK to include uppercase characters");


//checking console
//console.log(lower);
for (var i = 0; i < 8; i++) {
  password = letters[i];
  Math.floor(Math.random() * upper.length)
  }
