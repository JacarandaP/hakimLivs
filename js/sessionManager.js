

/**
 * js to manage the inlogning
 */
var isLogged=false;
/**
 * check if there is PROFILE in local storage
 */
var checkLogged=()=>{if(loadCredentialsLocalStorage!==null)isLogged=true; console.log(isLogged)}

/**
 * FOR BACKEND SIMULATION checks if its logged and changes loggin button to redirect to profile, and shows name
 */
let changeTopVarOnloggedIn=()=>{
   // checkLogged();
    let profile=JSON.parse(localStorage.getItem("PROFILE"));
  
    if(profile!=null){
        $('#loggin-button').attr('href','profile.html')
        $('#loggin-button-sidebar').attr('href','profile.html')
       
        $('#navbar').append('<div class="row d-block ml-5 mr-1 ">Inloggad som: '+formatNameSimple(profile.name)+'<button id="logout" class="d-block btn shadow mt-1" style="height:30px; border-color:#fff;" onClick="loggout();"><span class="text-white">Logga ut</span></button></div>')
        $('#sidebar').append('<div class="d-block mb-0 pt-4 w3-hide-large text-center  bg-light">Inloggad som: '+formatNameSimple(profile.name)+'<button id="logout-sidebar" class=" d-block btn shadow w-100" onClick="loggout();"><span class="text-white">Logga ut</span></button></div>')
    }
   
}
let loggout=()=> {localStorage.removeItem("PROFILE");
localStorage.removeItem("CREDENTIALS")
localStorage.removeItem("ORDERS")
localStorage.removeItem("OrderDetails")
location.href="index.html"}
