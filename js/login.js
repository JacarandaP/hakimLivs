var array = [];
var obj = {
  useremail: 'test@gmail.com',
  password: 'test'
};


//const  loginForm  =  document.getElementById("loginForm");
const usernameEmail = document.getElementById("usernameEmail");
const password = document.getElementById("password");
const  loginButton  =  document.getElementById("loginBtn");
const  loginErrorMsg  =  document.getElementById("errorMessage");

loginButton.addEventListener("click", (e) => {
   e.preventDefault();
    const valueEmail =usernameEmail.value;
    const valuePass = password.value;
    //BACKEND SIMULATION IS HERE
    backendLoggin(valueEmail,valuePass,frontendReacts);
    
});

function registerPage() {
    location.href = 'register.html';
}
let frontendReacts=(profile)=>{
    if(profile!=null){
  alert('Welcome '+ profile.name + '!')
  location.href='index.html'}
  else{
     
    loginErrorMsg.style.opacity = 1;
    loginErrorMsg.style.display='none';
     $('#errorMessage').fadeIn()
     $('#errorMessage').fadeOut(3000)
  }
}
   
        
    
    $(document).ready(()=>{
        $('#loginBtn').css('background-color', 'grey')
        $('#usernameEmail, #password').keyup(()=>{
        if( password.value.length >0 && usernameEmail.value.length>0)
        $('#loginBtn').css('background-color', ' #a0abeb') 
         else  $('#loginBtn').css('background-color', 'grey')
        })
       
})

