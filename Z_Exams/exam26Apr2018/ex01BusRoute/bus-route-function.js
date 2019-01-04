function busRoute() {
    let busStops = $('#bus-stops').children();
    let firstStop = $('input[name=first-stop]');
    let lastStop = $('input[name=last-stop]');

    if (invalidInput(firstStop.val(), lastStop.val(), busStops.length)) {
        return;
    }

    $('#selected-route > span').text(`${firstStop.val()}-${lastStop.val()}`);

    let container = $('#selected-bus-stops');
    let stops = busStops
        .toArray()
        .map(s => $(s).text())
        .slice(firstStop.val() - 1, lastStop.val())
        .map(s => $('<li>').text(s));

    container.empty();
    container.append(stops);

    firstStop.val('');
    lastStop.val('');

    function invalidInput(firstStop, lastStop, stopsCount) {
        if (firstStop === '' || lastStop === '') {
            return true;
        }
        if (firstStop >= lastStop) {
            return true;
        }
        if (firstStop < 1 || firstStop > stopsCount) {
            return true;
        }
        if (lastStop < 1 || lastStop > stopsCount) {
            return true;
        }
        return false;
    }
}
