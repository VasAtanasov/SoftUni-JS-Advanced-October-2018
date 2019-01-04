function solve(carOrder) {
    return {
        model: carOrder.model,
        engine: setEngine(carOrder.power),
        carriage: setCarriage(carOrder.carriage, carOrder.color),
        wheels: setWheels(carOrder.wheelsize)
    };

    function setWheels(wheelSize) {
        wheelSize = Math.floor(wheelSize);
        wheelSize = wheelSize % 2 === 0 ? wheelSize - 1 : wheelSize;
        return [wheelSize, wheelSize, wheelSize, wheelSize];
    }

    function setCarriage(type, color) {
        let carriages = {
            hatchback: {type: 'hatchback', color: color},
            coupe: {type: 'coupe', color: color},
        };
        return carriages[type];
    }

    function setEngine(power) {
        let engines = {
            smallEngine: {power: 90, volume: 1800},
            normalEngine: {power: 120, volume: 2400},
            monsterEngine: {power: 200, volume: 3500}
        };

        for (const engineType in engines) {
            if (power <= engines[engineType].power) {
                return engines[engineType];
            }
        }
    }
}

console.log(solve(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));
console.log();
console.log(solve(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));