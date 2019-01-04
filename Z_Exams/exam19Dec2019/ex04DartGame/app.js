function dart() {
    let tds = $('#scoreBoard tbody tr td');
    let teams = ["Home", "Away"];
    let layers = ['firstLayer', 'secondLayer', 'thirdLayer', 'fourthLayer', 'fifthLayer', 'sixthLayer'];
    let colors = tds.filter(":even")
        .toArray()
        .map((td) => $(td).text());

    let scoreBoard = tds.filter(":odd")
        .toArray()
        .map((el) => Number(el.textContent.split(' ')[0]))
        .reduce((acc, points, idx) => {
            acc[colors[idx]] = points;
            return acc;
        }, {});

    let game = (() => {
        let players = {
            Home: 0,
            Away: 0
        };
        let current = 0;
        let gameEnded = false;

        function hit(points) {
            if (gameEnded === true) {
                console.log('game already finished winner ' + teams[current]);
                return;
            }

            let player = teams[current];

            players[player] += points;

            if (players[player] >= 100) {
                gameEnded = true;
                $(`#${teams[current]}`);
                $(`#${player}`).find('p').eq(1).css('background','green');
                $(`#${player === "Home" ? "Away" : "Home"}`).find('p').eq(1).css('background','red');
            }

            renderResult();
            switchTuners();
        }

        function renderResult() {
            let player = teams[current];

            let div = $(`#${player}`);
            div.find('p').eq(0).text(players[player]);
            let turns = $('#turns').find('p');
            turns.eq(0).text(`Turn on ${player === "Home" ? "Away" : "Home"}`);
            turns.eq(1).text(`Next is ${player}`);
        }

        function switchTuners() {
            current++;
            current = current % 2;
        }


        return {
            hit,
            players
        }
    })();

    layers.forEach((layer, idx) => {
        let div = $(`div#${layer}`);
        div.on('click', function (target) {
            target.stopPropagation();
            game.hit(scoreBoard[colors[idx]]);
            console.log(game.players)
        })
    })


}