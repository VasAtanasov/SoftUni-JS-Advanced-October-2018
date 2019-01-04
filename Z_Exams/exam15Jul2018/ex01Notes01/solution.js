function addSticker() {
    let title = $('input.title');
    let content = $('input.content');

    let li = $('<li>');

    if (title.val() && content.val()) {
        li.addClass('note-content')
            .append($('<a>').addClass('button').text('x')
                .on('click', function () {
                    $(this).remove();
                }.bind(li))
            )
            .append($('<h2>').text(`${title.val()}`))
            .append($('<hr>'))
            .append($('<p>').text(`${content.val()}`))
            .appendTo($('ul#sticker-list'));

        title.val('');
        content.val('');
    }
}