var array = [];
var obj = {
  useremail: 'test@gmail.com',
  password: 'test'
};
/*COMMENTED BY BACKEND SIMULATION
array.push(obj);
console.log(obj.useremail);
console.log(obj.password);

//Skapa JSON data genom stringfy()
var setjson = JSON.stringify(obj);
localStorage.setItem("userData", setjson);
console.log(localStorage);

//Konvertera värdet som erhållits i JSON-format till ett objekt som kan användas i JaveScript genom JSON.parse ()
var getjsonUserData = localStorage.getItem("userData");
var objUserData = JSON.parse(getjsonUserData);

console.log(objUserData);
console.log(objUserData.useremail);
console.log(objUserData.password);
*///END OF COMMENT BACKEND SIMULATION

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
  

    /*COMMENTED BY BACKEND SIMULATION
    if(loadProfileLocalStorage!==null){
        //if(isLogged){
    location.href='index.html';}
    else
    loginErrorMsg.style.opacity = 1;

    
    if (valueEmail === objUserData.useremail  && valuePass === objUserData.password) {
        alert("Din inloggning lyckades");
        //location.reload();

        // kommer till index sidan 
        location.href='index.html';
    } else {
        //opacity(0) gör elementet transparent->(1)se meddelande
        loginErrorMsg.style.opacity = 1;
    }
    *///END OF COMMENT
});

function registerPage() {
    location.href = 'register.html';
}
let frontendReacts=(profile)=>{
   
   console.log(profile)
   // checkLogged()
    if(isLogged){
      //  alert("you are logged as:" + profile.name + " " + profile.lastname)
    location.href='index.html';

}
    else
    loginErrorMsg.style.opacity = 1;
}