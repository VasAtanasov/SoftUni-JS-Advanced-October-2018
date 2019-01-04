class LineManager {
    constructor(busStops) {
        this.stops = busStops;
        this.currentStop = 0;
        this.delay = 0;
        this.timeTraveled = 0;
    }

    set stops(busStops) {
        busStops.forEach(bt => {
            if (typeof bt.name !== "string" || bt.name === '') {
                throw new Error('Invalid name parameter.');
            }
            if (typeof bt.timeToNext !== "number" || bt.timeToNext < 0) {
                throw new Error('Invalid minutes parameter.');
            }
        });
        this._busStops = busStops;
    }

    get stops() {
        return this._busStops;
    }

    get atDepot() {
        return this.currentStop === this.stops.length - 1;
    }

    get nextStopName() {
        if (this.atDepot) {
            return 'At depot.'
        }
        return this.stops[this.currentStop + 1].name;
    }

    get currentDelay() {
        return this.delay;
    }

    get timeBySchedule() {
        return this.stops
            .map(s => s.timeToNext)
            .slice(0, this.currentStop + 1)
            .reduce((a, b) => a + b);
    }

    arriveAtStop(minutes) {
        if (this.atDepot || typeof minutes !== "number" || minutes < 0) {
            throw new Error('Bus cannot travel.');
        }
        this.timeTraveled += minutes;
        this.delay = this.timeTraveled - this.timeBySchedule;
        this.currentStop += 1;
        return !this.atDepot
    }

    toString() {
        return 'Line summary\n' +
            `${this.atDepot ? `- Course completed` : `- Next stop: ` + this.nextStopName}\n` +
            `- Stops covered: ${this.currentStop}\n` +
            `- Time on course: ${this.timeTraveled} minutes\n` +
            `- Delay: ${this.currentDelay} minutes`

    }
}


// Initialize a line manager with correct values
const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);


// Travel through all the stops until the bus is at depot
while (man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}

console.log(man.toString());

// Should throw an Error (minutes cannot be negative)
// man.arriveAtStop(-4);
// Should throw an Error (last stop reached)
// man.arriveAtStop(4);

// Should throw an Error at initialization
// const wrong = new LineManager([
//     {name: 'Stop', timeToNext: {wrong: 'Should be a number'}}
// ]);
