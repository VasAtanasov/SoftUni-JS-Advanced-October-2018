function attachEventsListeners() {
    let button = document.getElementById('convert');
    button.addEventListener('click', convert);

    let units = [1000, 1, 0.01, 0.001, 1609.34, 0.9144, 0.3048, 0.0254];

    function convert() {
        let input = document.getElementById('inputDistance').value;

        if (/[+-]*?[0-9]+(?:\.[0-9]+)?/.test(input)) {
            let number = Number(input);
            let inputUnit = document.getElementById('inputUnits').selectedIndex;
            let outputUnit = document.getElementById('outputUnits').selectedIndex;

            let inValue = number * units[inputUnit];
            document.getElementById('outputDistance').value = inValue / units[outputUnit];
        }
    }
}
// 1 km = 1000 m
// 1 m = 1 m
// 1 cm = 0.01 m
// 1 mm = 0.001 m
// 1 mi = 1609.34 m
// 1 yrd = 0.9144 m
// 1 ft = 0.3048 m
// 1 in = 0.0254 m