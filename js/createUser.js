//$(document).ready(function(){

    // tillsvidare
    let emailAlreadyInDb = false;
    let backendSimulatorAnswer = true;

    // skicka epostadressen till backend, kontrollera om den redan finns
    // om den finns - isEmailAvailable() returnera false, om den är ledig returnera true
    // om true: skapa användare, skicka till backend
    // om false: meddelande vid mejlfältet.


    //$("#submitForm").click(tryCreateUser);


    //$("#submitForm").submit(tryCreateUser);
/*
    $('#submitForm').submit(function(event){
        event.preventDefault();
        if($('#submitForm').valid()){
            tryCreateUser();
        }
    }); */

    // kolla mejladressen - backend 
    function isEmailAvailable(){
        let inputEmail = $("#emailBox").val(); // ska skickas till backend
        if(emailAlreadyInDb){
            return false;
        } else {
            return true;
        }
    }


    function tryCreateUser(){
        /*COMMENTED BY BACKEND SIMULATION take out when no need simulation

        if(isEmailAvailable() && $("#registerForm").valid()){
            $("#emailAvailableMsg").html("");
            console.log("valid");
*/
            createUser();
/*COMMENTED BY BACKEND SIMULATION

        } else {
            $("#emailAvailableMsg").html("Den här mejlen är redan registrerad på en användare. Logga in eller använd en annan mejl.")
        }
        */
        
    }

    function createUser(){
        let inputName = $("#firstNameBox").val();
        let inputLastname = $("#lastNameBox").val();
        let inputEmail = $("#emailBox").val();
        let inputPhone = $("#phoneBox").val();
        let inputAddress = $("#addressBox").val();
        let inputPostort = $("#cityBox").val();
        let inputPostnummer = $("#postalCodeBox").val();
        let inputPassword = $("#passwordBox").val();

        user = { name : inputName, 
            lastname: inputLastname, 
            email : inputEmail, 
            telephone: inputPhone,
            address: inputAddress,
            postort: inputPostort,
            postnummer: inputPostnummer,
            password: inputPassword
        };
/**
 * ADDED BT BACKEND SIMULATION here the bacendSimulation making up a response
 */
 backendSendRegister(inputName,inputLastname,inputEmail,inputPhone,
    inputAddress,inputPostort,inputPostnummer,inputPassword);

        /* COMMENTED BY BACKEND SIMULATION
        jUser = JSON.stringify(user);
        //console.log(user);
        console.log(jUser);
        if(backendSimulatorAnswer){
            localStorage.setItem("PROFILE", jUser);
            window.location.href = "index.html";
        }

        */
        // skicka JSON.stringify(user) till databas

    }


//})

/*
register-> skapar profile.json -> skickar til bandesiumaltionSendRegister(profile.json)-> 
läggat profil.json till fakeUser.json. svarr true, register sparar profile.json till localStorage

*/