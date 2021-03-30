/*
var array = [];
var obj = {
  'useremail': 'test@gmail.com',
  'password': 'test'
};
array.push(obj);
console.log(obj.useremail);
console.log(obj.password);

//Skapa JSON data genom stringfy()
var setjson = JSON.stringify(obj);
localStorage.setItem('useremail', setjson);
localStorage.setItem('password', setjson);

localStorage.getItem('useremail');
localStorage.getItem('password');

//Konvertera värdet som erhållits i JSON-format till ett objekt som kan användas i JaveScript genom JSON.parse ()
var getjsonUseremail = localStorage.getItem('useremail');
var getjsonPassword = localStorage.getItem('password');
var objUseremail = JSON.parse(getjsonUseremail);
var objUserPassword = JSON.parse(getjsonPassword);
*/

//const  loginForm  =  document.getElementById("loginForm");
const usernameEmail = document.getElementById("usernameEmail");
const password = document.getElementById("password");
const  loginButton  =  document.getElementById("loginBtn");
const  loginErrorMsg  =  document.getElementById("ErrorMessage");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const valueEmail =usernameEmail.value;
    const valuePass = password.value;
    const password = document.getElementById("password").value;

    if (valueEmail === 'test@gmail.com'  && valuePass === 'test') {
        alert("Din inloggning lyckades");
        //location.reload();
        
        // kommer till index sidan 
        location.href='index.html';
    } else {
        //opacity(0) gör elementet transparent->(1)se meddelande
        loginErrorMsg.style.opacity = 1;
    }
})