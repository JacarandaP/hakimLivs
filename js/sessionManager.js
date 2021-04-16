

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
        $('#navbar').append('</br>logged as:'+profile.name);
        $('#navbar').after('<button id="logout" class="btn btn-danger float-right mt-2" style="height:30px" onClick="loggout();">Log out</button>')
        
    }
   
}
let loggout=()=> {localStorage.removeItem("PROFILE");
localStorage.removeItem("CREDENTIALS")
localStorage.removeItem("shoppingCart")
localStorage.removeItem("ORDERS")
localStorage.removeItem("OrderDetails")
location.href="index.html"}
