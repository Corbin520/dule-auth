var htmlAuth = document.getElementById("authCode");
var usernameField = document.getElementById("username");
var passwordField = document.getElementById("password");
var response = "";


function varificationCode() {
    // passwordField.hide()
    // usernameField.hide()
    var numberArray = ["2", "1", "8", "9", "6", "5", "7", "3", "4", "0"];
    var response = "";
    for(var i = 0; i < numberArray.length; i++) {
        var random = Math.floor(Math.random() * numberArray[i])
        var randomAnswer = numberArray[random]
        response += randomAnswer
    }
    console.log(response)  
    htmlAuth.textContent = "Verification Code: " + response
}
