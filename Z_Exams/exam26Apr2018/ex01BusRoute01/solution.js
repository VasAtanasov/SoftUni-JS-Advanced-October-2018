function busRoute() {
    let firstStop = $('input[name="first-stop"]');
    let lastStop = $('input[name="last-stop"]');

    let selectedRoute = $('ul#selected-bus-stops');
    let busStops = $('ol#bus-stops > li').toArray();

    let start = Number(firstStop.val());
    let end = Number(lastStop.val());

    if (start < 1 ||
        end > busStops.length ||
        start >= end) {
        return;
    }

    selectedRoute.empty();
    $('#selected-route span').text(`${start}-${end}`);
    busStops
        .slice(start - 1, end)
        .map(s => s.textContent)
        .forEach(s => selectedRoute.append($('<li>').text(s)));

    firstStop.val('');
    lastStop.val('');

}