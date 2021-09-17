/*
var array = [];
var obj = {
  useremail: 'test@gmail.com',
  password: 'test'
};
*/
// changed urls for deplyment

//const loginaddress= "http://localhost:8082/login"
const loginaddress= "https://hakimssuperserver.herokuapp.com/login"
//const detailsAddress = "http://localhost:8082/customer/getmydetails/"
const detailsAddress = "https://hakimssuperserver.herokuapp.com/customer/getmydetails"
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
  let username = $("#usernameEmail").val().toLowerCase();
  let password = $("#password").val();
  let goTo=location.href.split('=')[1]

  console.log($("#usernameEmail").val());
  console.log($("#usernameEmail").val().toLowerCase());
  
  getAuth(username, password);



  //getUserData();
    
}
//if response status 200 all good
//if response status bad request teknisk fel
async function getAuth(email, password){
//let tokenJ;
  const response =await fetch(loginaddress,
    { method : 'POST',
    headers: {
      'Accept': '*/*',
      'Content-Type' : 'application/json'
    }, 
    body : JSON.stringify({email:email,password:password})
    });
if (response.status!=200){
console.log("Lösen eller användarnamn blev fel");
        loginErrorMsg.style.opacity = 1;
        $('#errorMessage').html("Användarnamnet eller lösenordet stämmer inte, försök igen!");
      }
else{
const object=await response.json();
sessionStorage.setItem('TOKEN',object.token)
      profile = getUserData(object.token);
      Swal.fire('Du är inloggad!').then((result)=>{if(result.isConfirmed)window.location.href = "index.html";})
}
//sessionStorage.setItem('TOKEN',object.token)
 //     profile = getUserData();
/*
    response.then (resp => {
      console.log(resp.text());
      if(resp.status == 200){
        return resp.json()
      } else {
        return resp
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

 let frontendReacts= (response)=>{
  if(response.status!=400){
      sessionStorage.setItem('TOKEN',response.token)
      profile = getUserData();

      

      if(localStorage.getItem("PROFILE") != null){
        //console.log("nåt i session profile")
        location.href='index.html';
      }
     

         
      //await new Promise(r => setTimeout(r, 2000));
      //location.href="index.html"
      
  }
      else{
        console.log("Lösen eller användarnamn blev fel");
        loginErrorMsg.style.opacity = 1;
        $('#errorMessage').html("Användarnamnet eller lösenordet stämmer inte, försök igen!");
      }
     
  }


function getUserData(token){
 //const token = sessionStorage.getItem('TOKEN');
  //console.log(token);
  fetch(detailsAddress,
    { method:"GET",
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': ''+token+''}})
        .then(res=>res.json())
        .then(user=> {
         // console.log(user)
       // userJ = JSON.parse(user);
          let profile = storeInloggedUser(user);
          return profile;
        })
      
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
  localStorage.setItem(
    "CREDENTIALS",
    JSON.stringify({ email: user.email, password: user.password })
  );
  return profile;
}

    
