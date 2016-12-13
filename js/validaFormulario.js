// Wait for the DOM to be ready
$(function () {

    $("#newsLetterValid").validate({
        rules: {

            inputNwsl: {
                required: true,
                email: true
            }
        },
        messages: {
            inputNwsl: {
                required: "Introduce un e-mail",
                email: "Formato no valido para e-mail"
            }
        },

        submitHandler: function (form) {
            $('label.successMsg').show();
        }

    });



    $("#validPopNl").validate({
        rules: {

            mailPop: {
                required: true,
                email: true
            }
        },
        messages: {
            mailPop: {
                required: "Introduce un e-mail",
                email: "Formato no valido para e-mail"
            }
        },

        submitHandler: function (form) {
            $('#validNslPop').show();
        }

    });









    $("#validForgotPsw").validate({
        rules: {

            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Introduce un e-mail",
                email: "Formato no valido para e-mail"
            }
        },

        submitHandler: function (form) {
            window.location = './gracias.php';
        }

    });




    $("#formaRegistro").validate({

        rules: {
            emailText: "required",
            passwordText: "required"
        },

        messages: {
            emailText: "Introduce E-mail",
            passwordText: "Introduce un Password"

        },

        submitHandler: function (form) {
            window.location = './account.php';
        }
    });




    $("#validRegister").validate({

        rules: {
            emailText: "required",
            nameText: "required"
        },

        messages: {
            emailText: "Introduce E-mail",
            nameText: "Introduce un Password"
        },

        submitHandler: function (form) {
            window.location = './account.php';
        }
    });




});