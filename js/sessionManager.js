

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
        $('#navbar  .hakimLivs-design').after('<div class="col-4 text-center  ">Inloggad som:'+profile.name+'</div>');
        $('#navbar').append('<button id="logout" class="col-2 btn shadow float-right mt-2 " style="height:30px" onClick="loggout();"><span class="align-middle text-white">Logga ut</span></button>')
    
    }
   
}
let loggout=()=> {localStorage.removeItem("PROFILE");
localStorage.removeItem("CREDENTIALS")
localStorage.removeItem("shoppingCart")
localStorage.removeItem("ORDERS")
localStorage.removeItem("OrderDetails")
location.href="index.html"}
