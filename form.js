let email_box = document.getElementById("email");
let password_box = document.getElementById("password");
let btn = document.querySelector("button");

email_box.addEventListener("change", onChange)
function onChange(e) {
    e.preventDefault();
   let email = email_box.value;
   

   if(email.length<4) {
     alert("Make sure email is more than 3 characters and has @ and a . ")
     return
    }
}
password_box.addEventListener("change", onChange2)
let password = password_box.value;
function onChange2(e) {
    e.preventDefault();
    if(password.length<8) {
        alert("Make sure your password is more than 8 characters.")
      return
    }
}
btn.addEventListener("click", validate)
function validate {
    let email = email_box.value;
    let password = password_box.value;
    if(email=="" || email.length < 4 || password=="") {
        alert("Please fill out both email and password.")
        return
    }
    alert("All good to go.")
    email_box.value = "";
    password_box.value = "";
 
}