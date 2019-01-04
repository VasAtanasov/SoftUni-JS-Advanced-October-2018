function addSticker() {
    let container = $('#sticker-list');

    let title = $('input.title');
    let content = $('input.content');

    if (title.val() && content.val()) {
        $('<li>').addClass('note-content')
            .append($('<a>')
                .addClass('button')
                .on('click',function () {
                    console.log($(this).parent().remove())
                })
                .text('x'))
            .append($('<h2>').text(title.val()))
            .append($('<hr>'))
            .append($('<p>').text(content.val()))
            .appendTo(container);

        title.val('');
        content.val('');
    }
}