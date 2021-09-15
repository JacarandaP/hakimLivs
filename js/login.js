/*
var array = [];
var obj = {
  useremail: 'test@gmail.com',
  password: 'test'
};
*/
const loginaddress= "http://localhost:8082/login"
const detailsAddress = "http://localhost:8082/customer/getmydetails/"
//const detailsAddress = "https://hakimssuperserver.herokuapp.com/customer/getmydetails/"
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
          $('#loginBtn').css('background-color', ' #ffb342')
        }
         else if ( password.value.length ==0 || usernameEmail.value.length==0)
         $('#loginBtn').prop('disabled', true).css('background-color', '#D0C4B2');
        })

       
})

function logIn(){
  let username = $("#usernameEmail").val();
  let password = $("#password").val();
  let goTo=location.href.split('=')[1]
 
  getAuth(username, password);



  //getUserData();
    
}

function getAuth(email, password){
//let tokenJ;
  const response = fetch(loginaddress,
    { method : 'POST',
    headers: {
      'Accept': '*/*',
      'Content-Type' : 'application/json'
    }, 
    body : JSON.stringify({email:email,password:password})
    });

    response.then (resp => {
      if(resp.status == 200){
        return resp.json()
      } else {
        return res
      }
    }).then(resp => frontendReacts(resp))
/*
  response.then( resp => resp.text()).then((token) => {
    localStorage.setItem("TOKEN",token)});  */

}

/**
 *  the reaction of frontend when gets the message from backend
 * @param {a json response from backend} response 
 */

 let frontendReacts=(response)=>{
  if(response.status!=400){
      sessionStorage.setItem('TOKEN',response.token)
      getUserData();

      location.href="index.html"
      
  }
      else{
        console.log("Lösen eller användarnamn blev fel");
        loginErrorMsg.style.opacity = 1;
        $('#errorMessage').html("Användarnamnet eller lösenordet stämmer inte, försök igen!");
      }
     
  }


function getUserData(){
  const token = localStorage.getItem("TOKEN");
  console.log(token);
  fetch(detailsAddress,
    { method:"POST",
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization' : token}})
        .then(resp=>resp.body.text())
        .then()
      // skicka parsad customer till storeInloggedCustomer
      
      /*
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
      */

}

function storeInloggedUser(user){
/*
  localStorage.setItem(
    "CREDENTIALS",
    JSON.stringify({ email: user.email, password: user.password, token: user.token })
  );
  */

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
    
