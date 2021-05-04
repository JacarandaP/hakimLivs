/*
var array = [];
var obj = {
  useremail: 'test@gmail.com',
  password: 'test'
};
*/

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
    //backendLoggin(valueEmail,valuePass,frontendReacts);
    logIn();
    
});

function registerPage() {
    location.href = 'register.html';
}
/*
let frontendReacts=(profile)=>{
    if(profile!=null){
  alert('Välkommen '+ profile.name + '!')
  location.href='index.html'}
  else{
     
    loginErrorMsg.style.opacity = 1;
    loginErrorMsg.style.display='none';
     $('#errorMessage').fadeIn()
     $('#errorMessage').fadeOut(3000)
  }
}
   */
        
    
    $(document).ready(()=>{
        $('#loginBtn').prop('disabled', true);
        $('#loginBtn').css('background-color', '#D0C4B2')
        $('#usernameEmail, #password').keyup(()=>{
        if( password.value.length >0 && usernameEmail.value.length>0)
        {
          $('#loginBtn').prop('disabled', false);
          $('#loginBtn').css('background-color', ' #ffcd42')
        }
         else if ( password.value.length ==0 || usernameEmail.value.length==0)
         $('#loginBtn').prop('disabled', true).css('background-color', '#D0C4B2');
        })
       
})

function logIn(){
  let username = $("#usernameEmail").val();
  let password = $("#password").val();
  let goTo=location.href.split('=')[1]
 

  fetch("https://hakimssuperserver.herokuapp.com/customer/checkcustomer/"+username+"/"+password+"",
    { method:"POST",
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'}}).
      then(resp=>resp.text()).
      then(function (user){

        if(!user){
          console.log("Lösen eller användarnamn blev fel");
          loginErrorMsg.style.opacity = 1;
          $('#errorMessage').html("Användarnamnet eller lösenordet stämmer inte, försök igen!");
        } else {
          userJ = JSON.parse(user);
          let profile = storeInloggedUser(userJ);

          if(goTo!=null)
            location.href='kassa.html';
          else
          location.href='index.html';
        }
      })
    
}

function storeInloggedUser(user){

  localStorage.setItem(
    "CREDENTIALS",
    JSON.stringify({ email: user.email, password: user.password })
  );

  profile = {
    customerID: user.id,
    name: user.firstname,
    lastname: user.lastname,
    email: user.email,
    telephone: user.telephone,
    address: user.address,
    postort: user.city,
    postnummer: user.zip,
    password: user.password,
  };
  localStorage.setItem("PROFILE", JSON.stringify(profile));
  return profile;
}
    
