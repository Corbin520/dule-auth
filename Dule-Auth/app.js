var htmlAuth = document.getElementById("authCode");
var usernameField = document.getElementById("username");
var passwordField = document.getElementById("password");
document.getElementById("duleAuth-input").style.visibility = "hidden";
var response = "";



function varificationCode() {
    document.getElementById("user").style.visibility = "hidden";
    document.getElementById("pass").style.visibility = "hidden";
    document.getElementById("duleAuth-input").style.visibility = "block"; // need to get it to show
    document.getElementById("login-bttn").style.visibility = "hidden";
    var numberArray = ["2", "1", "8", "9", "6", "5", "7", "3", "4", "0"];
    var response = "";
    for(var i = 0; i < numberArray.length; i++) {
        var random = Math.floor(Math.random() * numberArray[i])
        var randomAnswer = numberArray[random]
        response += randomAnswer
    } 
    htmlAuth.textContent = "Verification Code: " + response
}
