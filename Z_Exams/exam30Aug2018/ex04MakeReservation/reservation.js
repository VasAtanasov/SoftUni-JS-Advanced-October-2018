function makeReservation(selector) {
    let Vacationer = user().User;
    let btnManager = buttonManager($('button#submit'), $('button#edit'), $('button#continue'));
    let container = $(selector);
    let input = $('div.inputLabel > input');
    let registration;

    btnManager.submitBtn.on('click', function () {
        if (input.eq(0).val().trim() && input.eq(1).val().trim()) {
            registration = new Vacationer(input.toArray().map(i => i.value));
            $('ul#infoPreview')
                .append(`<li>Name: ${registration.fullName}</li>`)
                .append(`<li>E-mail: ${registration.email}</li>`)
                .append(`<li>Phone: ${registration.phoneNumber}</li>`)
                .append(`<li>Address: ${registration.address}</li>`)
                .append(`<li>Postal Code: ${registration.postalCode}</li>`);
            input.val('');
            btnManager.disableSubmit();
            btnManager.enableEdit();
            btnManager.enableContinue();
        }
    });

    btnManager.editBtn.on('click', function () {
        $('ul#infoPreview').empty();
        registration.allProperties.forEach((p, index) => input.eq(index).val(p));
        btnManager.enableSubmit();
        btnManager.disableContinue();
        btnManager.disableEdit();
    });

    btnManager.continueBtn.on('click', function () {
        container
            .append(`<h2>Payment details</h2>
                     <select id="paymentOptions" class="custom-select">
                         <option selected disabled hidden>Choose</option>
                         <option value="creditCard">Credit Card</option>
                         <option value="bankTransfer">Bank Transfer</option>
                     </select>
                     <div id="extraDetails"></div>`);

        $('#paymentOptions').change('click', function () {
            let extraDetails = $('div#extraDetails');
            let choice = $('#paymentOptions option:selected');
            extraDetails.empty();
            if (choice.text() === 'Credit Card') {
                extraDetails
                    .append(`<div class="inputLabel">Card Number<input></div><br>`)
                    .append(`<div class="inputLabel">Expiration Date<input></div><br>`)
                    .append(`<div class="inputLabel">Security Numbers<input></div><br>`)
                    .append(`<button id="checkOut">Check Out</button>`)
            } else if (choice.text() === 'Bank Transfer') {
                extraDetails
                    .append(`<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>`)
                    .append(`<button id="checkOut">Check Out</button>`)
            }

            $('#checkOut').on('click', function () {
                let wrapper = $('#wrapper');
                wrapper.empty();
                wrapper.append(`<h4>Thank you for your reservation!</h4>`)
            });
        });

        btnManager.disableSubmit();
        btnManager.disableContinue();
        btnManager.disableEdit();
    });


    function user() {
        class User {
            constructor([fullName, email, phoneNumber, address, postalCode]) {
                this.fullName = fullName;
                this.email = email;
                this.phoneNumber = phoneNumber;
                this.address = address;
                this.postalCode = postalCode;
            }

            get allProperties() {
                return [this.fullName, this.email, this.phoneNumber, this.address, this.postalCode];
            }
        }

        return {User};
    }

    function buttonManager(submitSelector, editSelector, continueSelector) {
        let submitBtn = $(submitSelector);
        let editBtn = $(editSelector);
        let continueBtn = $(continueSelector);

        return {
            disableSubmit: () => submitBtn.attr('disabled', true),
            enableSubmit: () => submitBtn.attr('disabled', false),
            disableEdit: () => editBtn.attr('disabled', true),
            enableEdit: () => editBtn.attr('disabled', false),
            disableContinue: () => continueBtn.attr('disabled', true),
            enableContinue: () => continueBtn.attr('disabled', false),
            submitBtn,
            editBtn,
            continueBtn,
        }
    }


}