function addDestination() {
    let inputBoxes = $('div#input > input');
    let city = inputBoxes.eq(0);
    let country = inputBoxes.eq(1);

    if (!city.val() || !country.val()) {
        return;
    }

    let season = $("#seasons option:selected").text();

    $('<tr>')
        .append($('<td>').text(`${city.val()}, ${country.val()}`))
        .append($('<td>').text(`${season}`))
        .appendTo($('#destinationsList'));

    let destination = $('#' + season.toLowerCase());
    destination.val(Number(destination.val()) + 1);
    city.val('');
    country.val('');
}
