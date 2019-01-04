function createBook(selector, titleName, authorName, isbn) {
    let bookGenerator = (function () {
        let id = 1;
        return function (selector, titleName, authorName, isbn) {
            let container = $(selector);

            let bookContainer = $('<div>')
                .attr('id', `book${id++}`)
                .css('border', 'none')
                .append($('<p>')
                    .addClass('title')
                    .text(titleName)
                )
                .append($('<p>')
                    .addClass('author')
                    .text(authorName)
                )
                .append($('<p>')
                    .addClass('isbn')
                    .text(isbn)
                )
                .append($('<button>')
                    .text('Select')
                    .on('click', function () {
                        $(this).parent().css('border', '2px solid blue');
                    })
                )
                .append($('<button>')
                    .text('Deselect')
                    .on('click', function () {
                        $(this).parent().css('border', 'none');
                    })
                );

            container.append(bookContainer)
        }
    }());

    bookGenerator(selector, titleName, authorName, isbn);
}
