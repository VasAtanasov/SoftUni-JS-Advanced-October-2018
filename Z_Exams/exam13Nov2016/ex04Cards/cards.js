function cardDeckBuilder(selector) {
    let suits = {
        C: "\u2663",   // ♣
        D: "\u2666",   // ♦
        H: "\u2665",   // ♥
        S: "\u2660"    // ♠
    };

    function addCard(face, suit) {
        let container = $(selector);
        $('<div>')
            .addClass('card')
            .on('click', function () {
                let deck = $('.card').toArray().reverse();
                $(selector).append(deck);
            })
            .text(`${face} ${suits[suit]}`)
            .appendTo(container);
    }

    return {addCard}
}