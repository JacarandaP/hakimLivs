/**
 * js to manage the inlogning
 */
var isLogged=false;
/**
 * check if there is PROFILE in local storage
 */
var checkLogged=()=>{if(loadProfileLocalStorage!==null)isLogged=true; console.log(isLogged)}