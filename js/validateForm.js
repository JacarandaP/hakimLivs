
    jQuery.validator.addMethod("specialChrs", function (value, element) {
        return new RegExp('^[A-Za-zÀ-žÅÄÖåäö ]+$').test(value)
    }, "Ej godkända tecken."
    ),

    jQuery.validator.addMethod("numeralsAndSpecialChars", function (value, element) {
        return new RegExp('^[A-Za-z0-9À-žÅÄÖåäö ]+$').test(value)
    }, "Ej godkända tecken."
    )


  //  formValidation();



    function formValidation(){
        $('#registerForm').validate({ 

            submitHandler:()=> { 
                tryCreateUser()
                //ADDED BY BACKEND SIMULATION
               if(!userExists){
                window.location.href = "index.html" 
               }
                 },
            
            

                 rules: {
                    firstName: {
                    required: true,
                    specialChrs: true,
                    maxlength: 100
                },
                lastName: {
                    required: true,
                    specialChrs: true, 
                    maxlength: 100
                }, 
                email: {
                    required: true, 
                    email: true, 
                    maxlength: 100
                },
                phone: {
                    required: true,
                    number: true,
                    minlength: 9, 
                    maxlength: 15
                },
                address: {
                    required: true,
                    numeralsAndSpecialChars: true, 
                    maxlength: 50
                },
                city: {
                    required: true,
                    specialChrs: true, 
                    maxlength: 50
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
                firstName: {
                    required: "Var god ange förnamn.",
                    maxlength: "Namnet du har angivit är för långt."
                },
                lastName: {
                    required: "Var god ange förnamn.",
                    maxlength: "Namnet du har angivit är för långt."
                },
                email: {
                    required: "Var god ange e-postadress.",
                    maxlength: "E-postadressen du har angivit är för lång."
                },
                phone: "Var god ange ett giltigt telefonnummer",
                address: {
                    required: "Var god ange din gata.",
                    maxlength: "Gatuadressen du har angivit är för lång."
                },
                city: {
                    required: "Var god ange din postort.",
                    maxlength: "Postorten du har angivit är för lång."
                },
                
                postalCode: "Var god ange giltigt postnummer.",
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

    
   

    function loginFormValidation(){
        $('#loginForm').validate({

            submitHandler:()=> { $('#submit').attr('disabled',true)},

            rules : {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 8,   
                }
            },
            messages: {
                email: "Var god ange ditt användarnamn (e-mejladress)",
                password: "Var god ange ditt lösenord."
            }
        })
    };


     /**
     * 
     * Validates the form at the check out
     * 
     */

    function formValidationCheckout(){
        $('#checkoutForm').validate({ 

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
                }
            },
            
           submitHandler: function(form) {
              //info about the order sends to backend and the cart is emptied
              displayConfirmationMsgg();
          }
        })
    }

    function formValidationAdminLogin(){
        $('#loginForm').validate({
            rules: {
                username:{
                    required: true,
                    maxlength: 100,
                    minlength: 3
                },
                password:{
                    required: true,
                    minlength: 8
                }
            },
            messages:{
                username:{
                required: "Var god ange användarnamn.",
                maxlength: "Användarnamnet du har angivit är för långt.",
                minlength: "Användarnamnet du har angivit är för kort."
            },
            password: {
                required: "Var god ange ett lösenord.",
                minlength: "Ditt lösenord måste vara minst åtta tecken långt."
            }
            }

        })

    }

    $('#loginForm').submit(function(event){
        event.preventDefault();
        if($('#loginForm').valid()){
            console.log("valid");
        }
    });

    function formValidationAdminFooter(){
        $("#footerForm").validate({
          rules: {
            email: {
              required: true,
              email: true,
              maxlength: 100,
            },
            address: {
              required: true,
              numeralsAndSpecialChars: true,
            },
            phone: {
              required: true,
              number: true,
              minlength: 9,
            },
            zip: {
              required: true,
              number: true,
              rangelength: [5, 6],
            },
            city: {
              required: true,
              specialChrs: true,
            },
          },
          messages: {
            email: {
              required: "Var god ange användarnamn.",
              maxlength: "Användarnamnet du har angivit är för långt.",
            },
            address: "Var god ange en adress.",
            phone: {
              required: "Var god ange ett telefonnummer.",
              number: "Var god ange ett giltigt telefonnummer.",
              minlength: "Telefonnummret är för kort.",
            },
            city: "Var god ange en postort.",
            zip: {
              required: "Var god ange ett postnummer.",
              number: "Var god ange giltigt postnummer.",
              rangelength: "Postnummret måste vara mellan 5 och 6 siffror",
            },
          },
        });
    }

    $('#footerForm').submit(function(event){
        event.preventDefault();
        if($('#footerForm').valid()){
            console.log("valid");
        }
    });



//})
