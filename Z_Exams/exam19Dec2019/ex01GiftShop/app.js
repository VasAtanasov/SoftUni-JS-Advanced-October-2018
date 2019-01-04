function solution() {
    const TOY_TYPE_INPUT = $('input#toyType');
    const TOY_PRICE_INPUT = $('input#toyPrice');
    const TOY_DESCRIPTION_INPUT = $('textarea#toyDescription');
    const ADD_BTN = $('div#fields button');

    const CONTAINER = $('section#christmasGiftShop');

    ADD_BTN.on('click', () => {
        let toyType = TOY_TYPE_INPUT.val();
        let toyPrice = TOY_PRICE_INPUT.val();
        let toyDescription = TOY_DESCRIPTION_INPUT.val();

        if (toyType.trim() && !isNaN(toyPrice) && toyDescription.trim()) {
            let div = $('<div>').addClass('gift');
            div
                .append($('<img src="gift.png">'))
                .append($('<h2>').text(toyType))
                .append($('<p>').text(toyDescription))
                .append($('<button>').text(`Buy it for $${toyPrice}`).click(function () {
                    $(this).remove();
                }.bind(div)));
            CONTAINER.append(div);
        }

        clearInput();
    });

    function clearInput() {
        TOY_TYPE_INPUT.val('');
        TOY_PRICE_INPUT.val('');
        TOY_DESCRIPTION_INPUT.val('');
    }

}