function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let hasStarted = false;
    let time = 0, intervalID = 0;

    $(startBtn).on("click", function () {
        if (!hasStarted) {
            time--;
            step();
            intervalID = setInterval(step, 1000);
            stopBtn.attr('disabled', false);
            startBtn.attr('disabled', true);
            hasStarted = true
        }
    });

    $(stopBtn).on("click", function () {
        if (hasStarted) {
            clearInterval(intervalID);
            stopBtn.attr('disabled', true);
            startBtn.attr('disabled', false);
            hasStarted = false
        }
    });

    function step() {
        time++;
        let currentSeconds = time % 60;
        let currentMinutes = Math.floor(time / 60 % 60);
        let currentHours = Math.floor(time / 60 / 60);

        $('#hours').text(('0' + currentHours).slice(-2));
        $('#minutes').text(('0' + currentMinutes).slice(-2));
        $('#seconds').text(('0' + currentSeconds).slice(-2));
    }
}