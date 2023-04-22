let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let button = document.getElementById('btn');
let messageDiv = document.getElementById('message');
emailInput.addEventListener("change", validate);
passwordInput.addEventListener("change", validate)

let Emessagediv = document.getElementById('Emessage');
let Pmessagediv = document.getElementById('Pmessage');

emailInput.onchange = validate();
passwordInput.onchange = validate();


//passwordInput.addEventListener('keypress', validate)

function validate() {
    let email = emailInput.value;
    let password = passwordInput.value;
    if (email != "" && email.includes("@") && email.length > 3 && email.includes(".") password != "" && password.length >= 8) {
        if (password != "" && password.length >= 8) {
            // console.log("All good to go")
            messageDiv.innerText = "All good to go!"
            messageDiv.style.color = "green";
            // button.removeAttribute("disabled");

            // Emessagediv.innerText="";
            // Pmessagediv.innerText="";

        }
    }

    else {
        messageDiv.innerText = "";
        Emessagediv.innerText = "Make sure email is more than 3 characters and has @ and a.";
        Emessagediv.style.color = "red";
        // console.log("Make sure email is more than 3 characters and has @ and a.")

        Pmessagediv.innerText = "Make sure password is more than 8 character.";
        Pmessagediv.style.color = "red";
        console.log("Email or password is invalid")
    }
}

else (password != "" && password.length >=8)
{
    if (email != "" && email.includes("@") && email.length > 3 && email.includes(".") && password != "" && password.length >8) {
        //  console.log("Email & password are valid")
        messageDiv.innerText = "All good to go!";
        messageDiv.style.color = "green";
        // button.removeAttribute("disabled");

        messagemaildiv.innerText = "";
        Pmessagediv.innerText = "";


    }
    else {
        // messageDiv.innerText="Email & password validation failed";
        // messageDiv.style.color="red";
        messageDiv.innerText = "";
        Emessagediv.innerText = "Make sure email is more than 3 characters and has @ and a.";
        Emessagediv.style.color = "red";
        Pmessagediv.innerText = " Make sure password is more than 8 characters.";
        Pmessagediv.style.color = "red";

        console.log("Email or password is invalid");
    }

}

