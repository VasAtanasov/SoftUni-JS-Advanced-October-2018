class Dialog {
    constructor(message, callback) {
        this.message = message;
        this.fn = callback;
        this.inputFields = [];
        this.params = {};
    }

    // attachEvents() {
    //     let buttons = $('.dialog button');
    //
    //     buttons.eq(1).on('click', function () {
    //         $(this).parent().parent().remove();
    //     });
    //
    //     buttons.eq(0).on('click', () => {
    //         let inputs = $('div.dialog input').toArray();
    //         inputs.forEach(input => {
    //             this.params[$(input).attr('name')] = $(input).val();
    //         });
    //         $(this).parent().parent().remove();
    //         this.fn(this.params);
    //     });
    // }

    addInput(label, name, type) {
        this.inputFields.push({label, name, type});
    }

    render() {
        let overlay = $(`<div class="overlay">`);
        let element = $(`<div class="dialog">`);
        element.append(`<p>${this.message}</p>`);
        for (const input of this.inputFields) {
            element.append(`<label>${input.label}</label>`);
            element.append(`<input name="${input.name}" type="${input.type}">`)
        }
        element.append(`<button>OK</button>`).on('click', this.submit.bind(this));
        element.append(`<button>Cancel</button>`).on('click', this.cancel.bind(this));
        overlay.append(element);
        $('body').append(overlay);
    }

    submit() {
        let inputs = $('div.dialog input').toArray();
        inputs.forEach(input => {
            this.params[$(input).attr('name')] = $(input).val();
        });
        $(this).parent().parent().remove();
        this.fn(this.params);
    }

    cancel() {
        $(this).parent().parent().remove();
    }
}