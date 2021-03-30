$(document).ready(function(){

    let emailAlreadyInDb = false;

    // skicka epostadressen till backend, kontrollera om den redan finns
    // om den finns - isEmailAvailable() returnera false, om den är ledig returnera true
    // om true: skapa användare, skicka till backend
    // om false: meddelande vid mejlfältet.

    $("#submitForm").click(tryCreateUser);


    // kolla mejladressen - backend 
    function isEmailAvailable(){
        let inputEmail = $("#emailBox").val();
        if(emailAlreadyInDb){
            return false;
        } else {
            return true;
        }
    }


    function tryCreateUser(){
        if(isEmailAvailable()){
            $("#emailAvailableMsg").html("");
            createUser();
        } else {
            $("#emailAvailableMsg").html("Den här mejlen är redan registrerad på en användare. Logga in eller använd en annan mejl.")
        }
        
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
            telehpone: inputPhone,
            address: inputAddress,
            postort: inputPostort,
            postnummer: inputPostnummer,
            password: inputPassword
        };

        
        jUser = JSON.stringify(user);
        //console.log(user);
        //console.log(jUser);
        // skicka JSON.stringify(user) till backend;

    }


})
