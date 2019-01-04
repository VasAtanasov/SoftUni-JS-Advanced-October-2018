function validate() {
    let regexUsername = /^[A-Za-z0-9]{3,20}$/;
    let regexPassword = /^\w{5,15}$/;
    let emailRegex = /^.*?@.*?\..*$/;

    let username = $('#username');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let email = $('#email');
    let companyNumber = $('#companyNumber');
    let companyCheckbox = $('#company');
    let companyInfo = $('#companyInfo');

    companyCheckbox.on('change', (function () {
        if ($(this).is(':checked')) {
            companyInfo.fadeIn(function () {
                companyInfo.css('display', 'block');
            });
        } else {
            companyInfo.fadeOut(function () {
                companyInfo.css('display', 'none');
            });
        }
    }));

    $('#submit').on('click', function (event) {
        event.preventDefault();
        let isValidUsername = regexUsername.test(username.val());
        let isEmailValid = emailRegex.test(email.val());
        let isValidPassword = regexPassword.test(password.val());
        let isValidConfirmPassword = regexPassword.test(confirmPassword.val());
        let arePasswordsIdentical = password.val() === confirmPassword.val();
        let allValid = true;


        if (isValidUsername) {
            username.css('border', 'none');
        } else {
            allValid = false;
            username.css('border', 'solid red');
        }

        if (isEmailValid) {
            email.css('border', 'none');
        } else {
            email.css('border', 'solid red');
            allValid = false;
        }

        if (arePasswordsIdentical) {
            if (isValidPassword) {
                password.css('border', 'none');
            } else {
                password.css('border', 'solid red');
                allValid = false;
            }

            if (isValidConfirmPassword) {
                confirmPassword.css('border', 'none');
            } else {
                confirmPassword.css('border', 'solid red');
                allValid = false;
            }

        } else {
            password.css('border', 'solid red');
            confirmPassword.css('border', 'solid red');
            allValid = false;
        }

        if (companyCheckbox.is(':checked')) {
            if (companyNumber.val() === '' || companyNumber.val() < 1000 || companyNumber.val() > 9999) {
                allValid = false;
                companyNumber.css('border', 'solid red');
            } else {
                companyNumber.css('border', 'none');
            }
        }

        if (allValid) {
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');

        }
    });
}
