let result = (function () {
    class Textbox {
        constructor(selector, regex) {
            this._elements = $(selector);
            this._invalidSymbols = regex;
            this.onInput();
        }

        onInput() {
            let that = this;
            this.elements.on('input', function (event) {
                that.value = $(this).val();
            });
        }

        get value() {
            return this._value;
        }

        set value(text) {
            this._value = text;
            this.elements.val(text);
        }

        get elements() {
            return this._elements;
        }

        isValid() {
            return !this._invalidSymbols.test(this.value);
        }
    }

    class Form {
        constructor(...textboxes) {
            for (let textbox of textboxes) {
                if (!(textbox instanceof Textbox))
                    throw new Error('Passed argument was not a textbox');
            }
            this._element = $('<div>').addClass('form');
            this._textboxes = textboxes;
            this._textboxes.forEach(t => this._element.append($(t.elements)));
        }

        attach(selector) {
            $(selector).append(this._element);
        }

        submit() {
            let isValid = true;
            this._textboxes.forEach(t => {
                if (t.isValid()) {
                    $(t.elements).css('border', '2px solid green')
                } else {
                    isValid = false;
                    $(t.elements).css('border', '2px solid red');
                }
            });
            return isValid;
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());


// let Textbox = result.Textbox;
// let Form = result.Form;
// let username = new Textbox("#username", /[^a-zA-Z0-9]/);
// let password = new Textbox("#password", /[^a-zA-Z]/);
// username.value = "username";
// password.value = "password2";
// let form = new Form(username, password);
// form.attach("#root");


let Textbox = result.Textbox;
let Form = result.Form;

let text = new Textbox(".text", /[^a-zA-Z0-9]/);
let name = new Textbox(".name", /[^a-zA-Z]/);
let textInputs = $('.text');
let nameInputs = $('.name');
textInputs.eq(0).val('Gosho');
textInputs.eq(0).trigger('input');
nameInputs.eq(0).val('pass123');
nameInputs.eq(0).trigger('input');
let form = new Form(text, name);
form.attach("#root");
let root = $('#root');
form.submit();
// expect($('.name').css('border')).to.equal("2px solid red");
// expect($('.text').eq(0).css('border')).to.equal("2px solid green");
// expect($('.text').eq(1).css('border')).to.equal("2px solid green");
