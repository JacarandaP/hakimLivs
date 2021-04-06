let loginButton=$('#loginBtn')
/**
 * styling set up
 */

$('#errorMessage').css('display','none');
$('#errorMessage').css('color','red');



/**
 *  the reaction of frontend when gets the message from backend
 * @param {a json response from backend} response 
 */
let frontendReacts=(response)=>{
    if(response.status=="ok"){
        //go to admin page
        let credentials={name:$('#username').val(),password:$('#password').val()}
        sessionStorage.setItem('ADMIN_CREDENTIALS',JSON.stringify(credentials))
        location.href="admin.html"
    }
    else
  $('#errorMessage').fadeIn("slow")
  $('#errorMessage').fadeOut(5000)
    //ERRROR
}


loginButton.on('click', (e)=>{
   //this is for test doesnt submit anything!
  //  e.preventDefault()
//get the values
    const valueName=$('#username').val();
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



 });
