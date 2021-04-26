jQuery.validator.addMethod(
  "specialChrs",
  function (value, element) {
    return this.optional(element) || /^[A-Za-zÀ-žÅÄÖåäö\s\-]+$/.test(value);
  },
  "Ej godkända tecken."
);

jQuery.validator.addMethod(
  "numeralsAndSpecialChars",
  function (value, element) {
    return this.optional(element) || /^[A-Za-z0-9À-žÅÄÖåäö\s\-]+$/.test(value);
  },
  "Ej godkända tecken."
);


jQuery.validator.addMethod(
  "zipFormat",
  function (value, element) {
    return this.optional(element) || /^\d{3}(?:[\s-]\d{2})?$/.test(value) || /^\d{5}$/.test(value);
  },
  "Ej godkända tecken."
);


jQuery.validator.addMethod(
  "phoneFormat",
  function (value, element) {
    return this.optional(element) || /^[0-9\s\-\+]+$/.test(value);
  },
  "Ej godkända tecken."
);

function registerFormValidation() {
  $("#registerForm").validate({
    submitHandler: () => {
      $("#submit").attr("disabled", true);
      createUser();
    },

    rules: {
      firstName: {
        required: true,
        specialChrs: true,
        maxlength: 50,
      },
      lastName: {
        required: true,
        specialChrs: true,
        maxlength: 50,
      },
      emailAdress: {
        required: true,
        email: true,
        maxlength: 50,
      },
      phone: {
        required: true,
        minlength: 9,
        maxlength: 15,
        phoneFormat: true,
      },
      address: {
        required: true,
        numeralsAndSpecialChars: true,
        maxlength: 50,
      },
      city: {
        required: true,
        specialChrs: true,
        maxlength: 50,
      },
      postalCode: {
        required: true,
        zipFormat: true,
      },
      password: {
        required: true,
        minlength: 8,
        maxlength: 50,
      },
      repeatPassword: {
        required: true,
        minlength: 8,
        maxlength: 50,
        equalTo: "#passwordBox",
      },
    },
    messages: {
      firstName: {
        required: "Var god ange förnamn.",
        maxlength: "Namnet du har angivit är för långt.", 
      },
      lastName: {
        required: "Var god ange efternamn.",
        maxlength: "Namnet du har angivit är för långt.",
      },
      emailAdress: {
        required: "Var god ange e-postadress.",
        maxlength: "E-postadressen du har angivit är för lång.",
        email: "Var god ange giltig e-postadress."
      },
      phone: "Var god ange ett giltigt telefonnummer",
      address: {
        required: "Var god ange din gata.",
        maxlength: "Gatuadressen du har angivit är för lång.",
      },
      city: {
        required: "Var god ange din postort.",
        maxlength: "Postorten du har angivit är för lång.",
      },

      postalCode: "Var god ange giltigt postnummer.",
      password: {
        required: "Var god ange ett lösenord.",
        minlength: "Ditt lösenord måste vara minst åtta tecken långt.",
      },
      repeatPassword: {
        required: "Var god upprepa ditt lösenord.",
        minlength: "Ditt lösenord måste vara minst åtta tecken långt.",
        equalTo:
          "Det här lösenordet måste stämma överens med det du angav ovan.",
      },
    },
  });
}

function updateUserProfileValidation() {
  $("#user-update-form").validate({
    submitHandler: () => {
      $("#submit-profile-changes").attr("disabled", true);
    },

    rules: {
      firstName: {
        required: true,
        specialChrs: true,
        maxlength: 50,
      },
      lastName: {
        required: true,
        specialChrs: true,
        maxlength: 50,
      },
      phone: {
        required: true,
        phoneFormat: true,
        minlength: 9,
        maxlength: 15,
      },
      address: {
        required: true,
        numeralsAndSpecialChars: true,
        maxlength: 50,
      },
      city: {
        required: true,
        specialChrs: true,
        maxlength: 50,
      },
      zip: {
        required: true,
        zipFormat: true,
      },
    },
    messages: {
      firstName: {
        required: "Var god ange förnamn.",
        maxlength: "Namnet du har angivit är för långt.",
      },
      lastName: {
        required: "Var god ange efternamn.",
        maxlength: "Namnet du har angivit är för långt.",
      },
      phone: "Var god ange ett giltigt telefonnummer",
      address: {
        required: "Var god ange din gata.",
        maxlength: "Gatuadressen du har angivit är för lång.",
      },
      city: {
        required: "Var god ange din postort.",
        maxlength: "Postorten du har angivit är för lång.",
      },
      zip: {
        required: "Var god ange ett postnummer.",
        postalCode: "Var god ange giltigt postnummer.",
      },
    },
  });
}

function loginFormValidation() {
  $("#loginForm").validate({
    submitHandler: () => {
      $("#submit").attr("disabled", true);
    },

    rules: {
      email: {
        required: true,
        email: true,
        maxlength: 50,
      },
      password: {
        required: true,
        minlength: 8,
        maxlength: 50,
      },
    },
    messages: {
      email: "Var god ange din e-postadress",
      password: "Var god ange ditt lösenord.",
    },
  });
}

/**
 *
 * Validates the form at the check out
 *
 */

function formValidationCheckout() {
  $("#checkoutForm").validate({
    rules: {
      firstName: {
        required: true,
        specialChrs: true,
        maxlength: 50,
      },
      lastName: {
        required: true,
        specialChrs: true,
        maxlength: 50,
      },
      email: {
        required: true,
        email: true,
        maxlength: 50,
      },
      phone: {
        required: true,
        minlength: 9,
        maxlength: 15,
        phoneFormat: true,
      },
      address: {
        required: true,
        numeralsAndSpecialChars: true,
        maxlength: 50,
      },
      city: {
        required: true,
        specialChrs: true,
        maxlength: 50,
      },
      postalCode: {
        required: true,
        zipFormat: true,
      },
    },
    messages: {
      firstName: "Var god ange förnamn.",
      lastName: "Var god ange efternamn.",
      email: "Var god ange e-postadress.",
      phone: "Var god ange ett giltigt telefonnummer",
      address: "Var god ange din gata.",
      city: "Var god ange din postort.",
      postalCode: {
        required: "Var god ange ditt postnummer.",
        number: "Var god ange giltigt postnummer.",
      },
    },

    submitHandler: function (form) {
      placeOrder();
      emptyCart();
      //POSTA ORDERDETAILS TO BACKEND AND JUST THEN TÖMMA PRODUCTSINORDERDETAILS

      displayConfirmationMsgg();
    },
  });
}

function formValidationAdminLogin() {
  $("#loginForm").validate({
    rules: {
      username: {
        required: true,
        maxlength: 50,
        minlength: 3,
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
        maxlength: 50,
      },
    },
    messages: {
      username: {
        required: "Var god ange användarnamn.",
        maxlength: "Användarnamnet du har angivit är för långt.",
        minlength: "Användarnamnet du har angivit är för kort.",
      },
      password: {
        required: "Var god ange ett lösenord.",
        minlength: "Ditt lösenord måste vara minst åtta tecken långt.",
      },
    },
  });
}

$("#loginForm").submit(function (event) {
  event.preventDefault();
  if ($("#loginForm").valid()) {
    console.log("valid");
  }
});

function formValidationAdminFooter() {
  $("#footerForm").validate({
    rules: {
      email: {
        required: true,
        email: true,
        maxlength: 50,
      },
      address: {
        required: true,
        numeralsAndSpecialChars: true,
        maxlength: 50,
      },
      phone: {
        required: true,
        minlength: 9,
        maxlength: 15,
        phoneFormat: true,
      },
      zip: {
        required: true,
        zipFormat: true,
      },
      city: {
        required: true,
        specialChrs: true,
        maxlength: 50,
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

$("#footerForm").submit(function (event) {
  event.preventDefault();
  if ($("#footerForm").valid()) {
    console.log("valid");
  }
});

