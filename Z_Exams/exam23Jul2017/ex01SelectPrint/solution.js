function move(command) {
    let availableTowns = $('#available-towns');
    let selectedTowns = $('#selected-towns');

    let commands = {
        right: function () {
            selectedTowns.append(
                availableTowns.find('option:selected')
            );
        },
        left: function () {
            availableTowns.append(
                selectedTowns.find('option:selected')
            );

        },
        print: function () {
            $('#output').text(selectedTowns.find('option').toArray().map(o => o.textContent).join('; '));
        }
    };

    commands[command]();
}