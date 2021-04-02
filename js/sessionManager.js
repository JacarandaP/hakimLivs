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
    checkLogged();
    let profile=loadProfileLocalStorage;
    if(isLogged & loadProfileLocalStorage!=null){
        $('#loggin-button').attr('href','profile.html')
        $('#navbar').append('logged as:'+profile.name);
    }
}
