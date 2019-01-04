class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
        this.element = this.getElement();
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        this.update();
    }

    update() {
        if (this.online) {
            $(this.element).find('.title').addClass('online');
        } else {
            $(this.element).find('.title').removeClass('online');
        }
    }

    toggleInfo() {
        $(this).parent().parent().find('div.info').toggle();
    }

    getElement() {
        return $('<article>')
            .append(
                $('<div>').addClass('title')
                    .text(`${this.firstName} ${this.lastName}`)
                    .append($(`<button>&#8505;</button>`).on('click', this.toggleInfo))
            )
            .append(
                $('<div>').addClass('info')
                    .append(`<span>&phone; ${this.phone}</span>`)
                    .append(`<span>&#9993; ${this.email}</span>`)
                    .hide()
            );
    }

    render(id) {
        this.element.appendTo($('#' + id));
    }

}