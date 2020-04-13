const login = document.querySelector(".login--btn");
const register = document.querySelector(".register--btn");

const loginForm = document.querySelector(".username");
const registerForm = document.querySelector(".password");

login.addEventListener("click",()=>
{
    let loginFormValue = loginForm.value;
    let registerFormValue = registerForm.value
    console.log(loginFormValue);
    console.log(registerFormValue);
});