
var generatePassword = function() {
  var password = ``;
  var characterLength= passwordLength(); 
  var characterType = passwordCharacters();


  for (var i = 0; i < characterLength; i++) {
    var mathMax = characterType.length;
    var charNum = Math.floor(Math.random() * mathMax) + 1;
    var charChoice = characterType.charAt(charNum);
    password = password + charChoice;
  }

  return password;
};

var passwordLength = function() {

  var length = parseInt(prompt("How many chracters for the password? Min 8, max 128."));
  while (length < 8 || length > 128 || !Number.isInteger(length)) {
    length = parseInt(prompt("Please enter valid number: 8 - 128."));
  }
  return length;
};

var passwordCharacters = function() {
  var characters = ``;
  var numbers = '0123456789';
  var lowerCase = `abcdefghijklmnopqrstuvwxyz`;
  var upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  var specialChar = `!@#$%^&*()-=_'",<.>/?[{]}`;

  while (!characters) {
    alert(`Your password can contain at least one of the following: Numbers, Lower Case, Upper Case, and/or Special Chracters.`);

    var numberConfirm = confirm(`Numbers? OK = YES Cancel = NO`);
    if (numberConfirm) {
      characters = characters + numbers;
    }

    var lowerConfirm = confirm(`Lower case characters? OK = YES Cancel = NO`);
    if (lowerConfirm) {
      characters = characters + lowerCase;
    }

    var upperConfirm = confirm(`Upper case characters? OK = YES Cancel = NO`);
    if (upperConfirm) {
      characters = characters + upperCase;
    }

    var specialConfirm = confirm(`Special characters? OK = YES Cancel = NO`);
    if (specialConfirm) {
      characters = characters + specialChar;
    }

    var confirmCharacters = confirm(`Confirm to generate password.`);
    if (!confirmCharacters) {
      characters = ``;
      alert("Please make your character selections again.");
    }
  }

  return characters;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
