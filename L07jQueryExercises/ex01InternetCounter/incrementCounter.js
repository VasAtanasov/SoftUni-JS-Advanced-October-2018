function increment(selector) {
    let textArea = $('<textarea>')
        .addClass('counter')
        .attr('disabled', true)
        .val(0);


    let incrementButton = $('<button>')
        .addClass('btn')
        .attr('id', 'incrementBtn')
        .text('Increment')
        .on('click', function () {
            let textBox = $('.counter');
            textBox.val(+textBox.val() + 1);

        });

    let addButton = $('<button>')
        .addClass('btn')
        .attr('id', 'addBtn')
        .text('Add')
        .on('click', function () {
            let list = $('.results');
            let li = $('<li>')
                .text($('.counter').val());
            li.appendTo(list);
        });

    let list = $('<ul>')
        .addClass('results');

    textArea.appendTo(selector);
    incrementButton.appendTo(selector);
    addButton.appendTo(selector);
    list.appendTo(selector)
}
