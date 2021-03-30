$(document).ready(function(){

    formValidation();

    function formValidation(){


        $('#registerForm').validate({ 

            
            submitHandler:()=> { $('#submitForm').attr('disabled',true)},


            rules: {
                firstName: "required",
                lastName: "required",
                email: {
                    required: true, 
                    email: true
                },
                phone: {
                    required: true,
                    number: true,
                    minlength: 9
                },
                address: "required",
                city: "required",
                postalCode: {
                    required: true,
                    number: true,
                    minlength: 5,
                    maxlength: 6
                },
                password: {
                    required: true,
                    minlength: 8,   
                },
                repeatPassword: {
                    required: true,
                    minlength: 8,
                    equalTo: "#password"
                }
            }, 
            messages: {
                firstName: "Var god ange förnamn.",
                lastName: "Var god ange efternamn.",
                email: "Var god ange e-postadress.",
                phone: "Var god ange ett giltigt telefonnummer",
                address: "Var god ange din gata.",
                city: "Var god ange din postort.",
                postalCode: "Var god ange ditt postnummer.",
                password: {
                    required: "Var god ange ett lösenord.",
                    minlength: "Ditt lösenord måste vara minst åtta tecken långt."
                },
                repeatPassword: {
                    required: "Var god upprepa ditt lösenord.",
                    equalTo: "Det här lösenordet måste stämma överens med det du angav ovan."
                }
            }
        })
    

    }



})