let logBtn = document.querySelectorAll(".enter")
let regBtn = document.querySelectorAll(".reg")
let sbtLog = document.querySelector(".put")
let sbtReg = document.querySelector(".input")
let err= document.querySelector(".empty")
let nme= document.querySelector("#name")
let key= document.querySelector("#password")
let ror= document.querySelector(".mpty")
let txt= document.querySelector("#afa")
let passkey= document.querySelector("#pass-word")
let confirmkey= document.querySelector("#confirm-password")
let mail= document.querySelector("#email")


logBtn.forEach((sub1) => {
    sub1.addEventListener("click", ()=>{
        document.querySelector(".log").style.display = "flex";
        document.querySelector(".register").style.display = "none";
    });
});
regBtn.forEach((sub2)=>{
    sub2.addEventListener("click", ()=>{
        document.querySelector(".log").style.display = "none";
        document.querySelector(".register").style.display = "flex";
    });
});
sbtLog.addEventListener("click", () => {
    let errors = []; // Create an array to store error messages

    if (nme.value.trim() === "" && key.value.trim() === "") {
        errors.push("Error: Both username and password fields are required.");
    } else {
        if (nme.value.trim() === "") {
            errors.push("Error: The username field is required.");
        }
        if (key.value.trim() === "") {
            errors.push("Error: The password field is required.");
        }
    }
    if (errors.length > 0) {
        err.innerHTML = errors.join("<br>"); // Display all error messages
    } else {
        err.innerHTML = ""; // Clear the error messages if everything is valid
        // Continue with login logic
    }
});

sbtReg.addEventListener("click", () => {
    let xrrors = []; // Create an array to store error messages

    // Check if all fields are empty
    if (
        txt.value.trim() === "" && 
        passkey.value.trim() === "" && 
        confirmkey.value.trim() === "" && 
        mail.value.trim() === ""
    ) {
        xrrors.push("Error: All fields are required.");
    } else {
        // Check each field individually
        if (txt.value.trim() === "") {
            xrrors.push("Error: The username field is required.");
        }
        if (passkey.value.trim() === "") {
           xrrors.push("Error: The password field is required.");
        }
        if (confirmkey.value.trim() === "") {
           xrrors.push("Error: The confirmation field is required.");
        }
        if (mail.value.trim() === "") {
            xrrors.push("Error: The email field is required.");
        }

        // Check if password and confirm password match
        if (passkey.value.trim() !== confirmkey.value.trim()) {
            xrrors.push("Error: Password and confirmation do not match.");
        }
    }

    // Display error messages if any
    if (xrrors.length > 0) {
        ror.innerHTML = xrrors.join("<br>"); // Display all error messages
    } else {
        ror.innerHTML = ""; // Clear the error messages if everything is valid
        // Continue with registration logic
    }
});











