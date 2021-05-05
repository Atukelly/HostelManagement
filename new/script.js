const changeBtn = document.getElementById('formChange')
const registerForm = document.getElementById('registerForm')
const loginForm = document.getElementById('loginForm')
const overlay = document.getElementById('overlay')
const messageHead = document.getElementById('message-head')
const messageContent = document.getElementById('message-content')

changeBtn.addEventListener('click', ()=>{
    toogle(overlay,loginForm,registerForm)
})

const toogle = (overlay,loginForm,registerForm)=>{
    if(overlay.style.left=== '0%'){
        loginForm.style.display = 'none';
        overlay.style.left = '50%';
        registerForm.style.display = 'flex'
        messageContent.innerHTML ='Login with your details'
        messageHead.innerHTML = 'Welcome, to our service'
        changeBtn.innerHTML = 'Sign In'
    }else{
        loginForm.style.display = 'flex';
        overlay.style.left = '0%';
        messageContent.innerHTML = 'Register with your Personal Information'
        messageHead.innerHTML = 'Hello, Valuable User'
        registerForm.style.display = 'none'
        changeBtn.innerHTML = 'Sign Up'
    }
}