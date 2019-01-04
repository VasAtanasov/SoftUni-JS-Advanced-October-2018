function attachEvents() {
    $('#btnDelete').on('click', function () {
        let input = $('#townName');
        let result = $('#result');
        let searchedTown = input.val();
        let element = $('#towns option')
            .filter((index, element) => {
                return $(element).text() === searchedTown;
            })
            .remove()
            .toArray();

        if (element.length > 0) {
            result.text(`${searchedTown} deleted.`);

        } else {
            result.text(`${searchedTown} not found.`);
        }
        input.val("");
    });
}