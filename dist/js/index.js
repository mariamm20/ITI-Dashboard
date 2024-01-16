var startBtn = document.getElementById("start-btn");
var landSection = document.getElementById("land");
var loginSection = document.getElementById("login-form")
startBtn.addEventListener("click", ()=>{
    landSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
    loginSection.classList.add("flex", "flex-col");
})

var username = document.getElementById("username");
var password = document.getElementById("password");
var errorBox = document.getElementById("error-box");
var loginBtn = document.getElementById("login-btn");
localStorage.setItem("username", "admin101");
localStorage.setItem("password" , "admin101+");
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    var enteredUsername = username.value;
    var enteredPassword = password.value;
    console.log(localStorage.getItem("username"))
    if (enteredUsername === localStorage.getItem("username")) {
        if (enteredPassword === localStorage.getItem("password")) {
            window.location.href = "dashboard.html";
        }else {
            errorBox.classList.remove("hidden");
            errorBox.classList.add("block");
        }

    } else {
        errorBox.classList.remove("hidden");
        errorBox.classList.add("block");
    }
});


















