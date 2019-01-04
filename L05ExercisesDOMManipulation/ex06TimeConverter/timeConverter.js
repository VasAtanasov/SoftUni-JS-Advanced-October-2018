function attachEventsListeners() {
    let hoursInDay = 24;
    let minutesInDay = 1440;
    let secondsInDay = 86400;

    let dayButton = document.getElementById('daysBtn');
    dayButton.addEventListener('click', function () {
        let days = document.getElementById('days').value;
        let hours = Number(days) * hoursInDay;
        let minutes = Number(days) * minutesInDay;
        let seconds = Number(days) * secondsInDay;

        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    });


    let hourButton = document.getElementById('hoursBtn');
    hourButton.addEventListener('click', function () {
        let hours = document.getElementById('hours').value;


        let days = Number(hours) / hoursInDay;
        let minutes = days * minutesInDay;
        let seconds = days * secondsInDay;

        document.getElementById('days').value = days;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    });


    let minuteButton = document.getElementById('minutesBtn');
    minuteButton.addEventListener('click', function () {
        let minutes = document.getElementById('minutes').value;

        let seconds = Number(minutes) * 60;
        let hours = Number(minutes) / 60;

        document.getElementById('days').value = hours / hoursInDay;
        document.getElementById('hours').value = hours;
        document.getElementById('seconds').value = seconds;
    });

    let secondsButton = document.getElementById('secondsBtn');
    secondsButton.addEventListener('click', function () {
        let seconds = document.getElementById('seconds').value;

        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
    });

}
