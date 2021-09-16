const signupaddres="https://hakimssuperserver.herokuapp.com/signup"
const loginaddres="https://hakimssuperserver.herokuapp.com/login"
let loginButton=$('#loginBtn')
const signUpButton=$('#signUpBtn')

/**
 * styling set up
 */

$('#errorMessage').css('display','none');
$('#errorMessage').css('color','red');
$('#errorMessage2').css('display','none');
$('#errorMessage2').css('color','red');


/**
 *  the reaction of frontend when gets the message from backend
 * @param {a json response from backend} response 
 */
let frontendReacts=(response)=>{
    if(response.status!=400){
        sessionStorage.setItem('TOKEN',response.token)
        location.href="adminHome.html"
    }
        else{
        $('#errorMessage').text(response.status + " error");
        $('#errorMessage').fadeIn("slow")
        $('#errorMessage').fadeOut(5000)
        }
       // "
    }

loginButton.on('click',(e)=>{
    e.preventDefault();
    const login={
        email:$('#emailLogin').val(),
        password:$('#password').val(),
      
    }
    fetch(loginaddres,{
        method:'POST',
        headers:{'Accept':'application/json, text/plain, */*',
        'Content-Type': 'application/json' },
        body:JSON.stringify(login)})
        .then(res=>{
            if(res.status==200)
            return res.json()
        else
            return res}) //promise -> som body-text
        .then(res=>frontendReacts(res))

    })





let frontendReacts2=(response)=>{
    if(response==200){
        $('#errorMessage2').text("Du är registrerad, logga in")
  $('#errorMessage2').fadeIn("slow")
  $('#errorMessage2').fadeOut(5000)
  $('#errorMessage2').css('color','green');
    }
    else
    $('#errorMessage2').text("kunde inte registrera som ADMIN")
  $('#errorMessage2').fadeIn("slow")
  $('#errorMessage2').fadeOut(5000)
    //ERRROR
}
signUpButton.on('click',(e)=>{
    e.preventDefault();
    const signup={
        email:$('#emailsignup').val(),
        firstname:$('#usernamesignup').val(),
        lastname:$('#lastnamesignup').val(),
        password:$('#passwordsignup').val(),
        secretToken:$('#accesstoken').val()
    }
    fetch(signupaddres,{
        method:'POST',
        headers:{'Accept':'application/json, text/plain, */*',
        'Content-Type': 'application/json' },
        body:JSON.stringify(signup)})
        .then(res=>res)
        .then(res=>frontendReacts2(res.status))

    })




/*
loginButton.on('click', (e)=>{
   //this is for test doesnt submit anything!
    e.preventDefault()
//get the values
    const valueName=$('#emailLogin').val();
const valuePass=$('#password').val();

//sending to backend
    fetch('../mockupdata/admincredentials.json')
    .then(response=>response.json()).then(json=>{
//BACKEND CHECKING
let backendResponse;
if(json.name==valueName&&json.pass==valuePass){
 
   backendResponse={status:"ok"}
  
}
else{
    backendResponse={status:"fail"}
  

}
return backendResponse;

    }).then(backendResponse=>{frontendReacts(backendResponse)})



 });*/
