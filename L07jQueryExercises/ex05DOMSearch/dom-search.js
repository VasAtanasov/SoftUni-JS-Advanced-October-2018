function domSearch(selector, isCaseSensitive) {
    let container = $(selector);

    $('<div>')
        .addClass('add-controls')
        .append($('<label>').text('Enter text: ').append($('<input>')))
        .append($('<a>').addClass('button').css('display', 'inline-block').on('click', addItem).text('Add'))
        .appendTo(container);


    $('<div>')
        .addClass('search-controls')
        .append($('<label>').text('Search: '))
        .append($('<input>').on('change', searchItem))
        .appendTo(container);

    $('<div>')
        .addClass('result-controls')
        .append($('<ul>').addClass('items-list'))
        .appendTo(container);


    function addItem() {
        let item = $(this).parent().children()[0].children[0].value;

        if (item.trim() !== '') {
            $('.items-list')
                .append(
                    $('<li>')
                        .addClass('list-item')
                        .append(
                            $('<a>')
                                .addClass('button')
                                .on('click', deleteItem)
                                .text('X')
                        )
                        .append($('<strong>').text(item))
                );
            $(this).parent().children()[0].children[0].value = '';
        }
    }

    function deleteItem() {
        $(this).parent().remove();
    }

    function searchItem() {
        let listItems = $('.items-list > li');
        listItems.css('display', 'block');
        let searchedItem = $(this).val();
        if (isCaseSensitive) {
            listItems.filter((i, e) => {
                return $(e)
                    .children()[1]
                    .textContent
                    .indexOf(searchedItem) === -1
            })
                .css('display', 'none');
        } else {
            listItems.filter((i, e) => {
                return $(e)
                    .children()[1]
                    .textContent
                    .toLowerCase()
                    .indexOf(searchedItem.toLowerCase()) === -1
            })
                .css('display', 'none');
        }
    }
}
