$(document).ready(function(){


    jQuery.validator.addMethod("specialChrs", function (element, value) {
        return new RegExp('^[A-Za-zÀ-ž\u0370-\u03FF\u0400-\u04FF]+$').test(value)
    }), 

    // [A-Za-zÀ-ž\u0370-\u03FF\u0400-\u04FF]
    // [a-zA-Z^\\u0041-\\u007F]


    formValidation();

    function formValidation(){
        $('#registerForm').validate({ 
            
            submitHandler:()=> { $('#submitForm').attr('disabled',true)},

            rules: {
                    firstName: {
                    required: true,
                    specialChrs: true
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
                    specialChrs: true
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
                postalCode:  "Var god ange ditt postnummer.",
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
})