//register user
//if email exists returns status 208 (already reported)
//if there is problem with security service return status 400 (bad request)
//if security service has problems return 408 (conflict)
//IF user is signed up, returns 200. with text=> user signed up

async function sendUserToDB(user){
const response = await fetch(signupAddress,{
  method: "POST",
    headers: { 'Accept': "*/*", "Content-Type": "application/json" },
    body: JSON.stringify(user),
})
if(response.status==200){
$("#registerForm").append(`<div class="text-success text-center">Registrering lyckades med ${user.email} email address,<a href="loggin.html">klicka här för att logga in</a></div>`)
Swal.fire('Registrering lyckades med '+user.email+' email address').then((result)=>{if(result.isConfirmed)window.location.href = "loggin.html";}) 
}
else if(response.status==208){
$("#emailAvailableMsg").html(
  "Den här mejlen är redan registrerad på en användare. Logga in eller använd en annan mejl."
);}
else
$("#registerForm").append('<div class="text-danger text-center">tekniska fel</div>')}

// function sendUserToDB(user) {
//   let request = new Request("https://hakimssuperserver.herokuapp.com/signup", {
//     method: "POST",
//     headers: { Accept: "*/*", "Content-Type": "application/json" },
//     body: JSON.stringify(user),
//   });

//   fetch(request)
//     .then((resp) => resp.json())
//     .then(function (data) {
//       console.log(data.email);
//       if (data.email === null) {
//         $("#emailAvailableMsg").html(
//           "Den här mejlen är redan registrerad på en användare. Logga in eller använd en annan mejl."
//         );
//       } else {
//         $("#registerForm").append(`<div class="text-success text-center">Registrering lyckades med ${data.email} email address,<a href="loggin.html">klicka här för att logga in</a></div>`)
//        // window.location.href = "loggin.html";
//         //console.log("index.html");
//       }
//     });
// }


function createUser() {
  let inputName = $("#firstNameBox").val();
  let inputLastname = $("#lastNameBox").val();
  let inputEmail = $("#emailBox").val().toLowerCase();
  let inputPhone = $("#phoneBox").val();
  let inputAddress = $("#addressBox").val();
  let inputPostort = $("#cityBox").val();
  let inputPostnummer = $("#postalCodeBox").val();
  let inputPassword = $("#passwordBox").val();

  user = {
    firstname: inputName,
    lastname: inputLastname,
    email: inputEmail,
    telephone: inputPhone,
    address: inputAddress,
    city: inputPostort,
    zip: inputPostnummer,
    password: inputPassword,
  };

  sendUserToDB(user);
}


/*
register-> skapar profile.json -> skickar til bandesiumaltionSendRegister(profile.json)-> 
läggat profil.json till fakeUser.json. svarr true, register sparar profile.json till localStorage

*/
