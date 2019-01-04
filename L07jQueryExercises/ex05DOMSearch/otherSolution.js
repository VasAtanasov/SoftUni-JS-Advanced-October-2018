function domSearch(selector, isCaseSensitive) {
    let selectedElement = $(selector)
    let isSearchCaseSensitive = isCaseSensitive

    addAddControls()
    addSearchControls()
    addResultControls()

    function addAddControls() {
        selectedElement
            .append(
                $('<div>').addClass('add-controls')
                    .append($('<label>').text('Enter text'))
                    .append($('<input>'))
                    .append($('<a>').text('Add').addClass('button').click(addEleemnToList)))
    }

    function addSearchControls() {
        selectedElement
            .append($('<div>').addClass('search-controls')
                .append($('<label>').text('Search:'))
                .append($('<input>').change(search)))
    }

    function addResultControls() {
        selectedElement
            .append($('<div>').addClass('result-controls')
                .append($('<ul>').addClass('items-list')))
    }

    function addEleemnToList() {
        let addItemElemnt = $('.add-controls>input')
        $('.result-controls>.items-list')
            .append($('<li>')
                .addClass('list-item')
                .append($('<a>')
                    .text('X')
                    .addClass('button')
                    .click(deleteElementFromList))
                .append($('<strong>')
                    .text(addItemElemnt.val())))
    }

    function deleteElementFromList(event) {
        let listItemToDelete = $(event.target)
        listItemToDelete.parent().remove()
    }

    function search() {
        let searchedText = $('.search-controls>input').val()
        let listItems = $('.items-list>li')
        listItems.each(function(index, element) {
            $(element).css('display', 'block')

            if (isCaseSensitive) {
                if ($(element).text().indexOf(searchedText) === -1) {
                    $(element).css('display', 'none')
                }
            } else {
                if ($(element).text().toLowerCase().indexOf(searchedText.toLowerCase()) === -1) {
                    $(element).css('display', 'none')
                }
            }
        })
    }
}