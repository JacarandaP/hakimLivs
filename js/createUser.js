function sendUserToDB(user) {
  let request = new Request("https://hakimssuperserver.herokuapp.com/customer/signup", {
    method: "POST",
    headers: { Accept: "*/*", "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  fetch(request)
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data.email);
      if (data.email === null) {
        $("#emailAvailableMsg").html(
          "Den här mejlen är redan registrerad på en användare. Logga in eller använd en annan mejl."
        );
      } else {
        $("#registerForm").append(`<div class="text-success text-center">Registrering lyckades med ${data.email} email address,<a href="loggin.html">klicka här för att logga in</a></div>`)
       // window.location.href = "loggin.html";
        //console.log("index.html");
      }
    });
}

function createUser() {
  let inputName = $("#firstNameBox").val();
  let inputLastname = $("#lastNameBox").val();
  let inputEmail = $("#emailBox").val();
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
