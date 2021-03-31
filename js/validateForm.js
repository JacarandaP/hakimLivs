$(document).ready(function(){


    jQuery.validator.addMethod("specialChrs", function (value, element) {
        return new RegExp('^[A-Za-zÀ-žÅÄÖåäö ]+$').test(value)
    }, "Ej godkända tecken."
    ),

    jQuery.validator.addMethod("numeralsAndSpecialChars", function (value, element) {
        return new RegExp('^[A-Za-z0-9À-žÅÄÖåäö ]+$').test(value)
    }, "Ej godkända tecken."
    )


    formValidation();



    function formValidation(){
        $('#registerForm').validate({ 
            
            //submitHandler:()=> { $('#submitForm').attr('disabled',true)},
         
 /*           submitHandler: function(form) {
                if(form.valid()){
                    console.log("valid")
                } else {
                    console.log("invalid")
                }
              },
            
/*
            submitHandler:()=> { 
                window.location.href = "index.html"                    
                 },
            */
            

            rules: {
                    firstName: {
                    required: true,
                    specialChrs: true,
                },
                lastName: {
                    required: true,
                    specialChrs: true
                }, 
                email: {
                    required: true, 
                    email: true
                },
                phone: {
                    required: true,
                    number: true,
                    minlength: 9
                },
                address: {
                    required: true,
                    numeralsAndSpecialChars: true
                },
                city: {
                    required: true,
                    specialChrs: true
                },
                postalCode: {
                    required: true,
                    number: true,
                    rangelength: [5,6]
                },
                password: {
                    required: true,
                    minlength: 8,   
                },
                repeatPassword: {
                    required: true,
                    minlength: 8,
                    equalTo: "#passwordBox"
                }
            }, 
            messages: {
                firstName: "Var god ange förnamn.",
                lastName: "Var god ange efternamn.",
                email: "Var god ange e-postadress.",
                phone: "Var god ange ett giltigt telefonnummer",
                address: "Var god ange din gata.",
                city: "Var god ange din postort.",
                postalCode:  {
                    required: "Var god ange ditt postnummer.",
                    number: "Var god ange giltigt postnummer."
                },
                password: {
                    required: "Var god ange ett lösenord.",
                    minlength: "Ditt lösenord måste vara minst åtta tecken långt."
                },
                repeatPassword: {
                    required: "Var god upprepa ditt lösenord.",
                    minlength: "Ditt lösenord måste vara minst åtta tecken långt.",
                    equalTo: "Det här lösenordet måste stämma överens med det du angav ovan."
                }
            }
        })
    }


    $('#submitForm').submit(function(event){
        event.preventDefault();
        if($('#submitForm').valid()){
            console.log("valid");
            tryCreateUser();
        }
    });
})