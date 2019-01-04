function parse(str) {

    let numbers = str.split(/\s+/)
        .filter(str => /[0-9]+\.[0-9]+/.test(str))
        .map(Number)
        .sort((a,b) => a-b);

    for (let i = 0; i < numbers.length; i++) {
        console.log(`${i} - ${numbers[i]}`);
        // console.log(`${i+50} - ${numbers[i]}`);
    }

    console.log();

    for (let i = 0; i < numbers.length; i++) {
        console.log(`${numbers[i]}`);
    }
}


parse('1060.12 1062.56 1065.01 1067.46 1069.91 1072.37 \n' +
    '1074.84 1077.31 1079.78 1082.26 \n' +
    '1084.75 1087.24 1089.73 1092.23 1094.74 1097.25 1099.76 1102.28 1104.81 1107.34 \n' +
    '1109.87 1112.42 1114.96 1117.52 1120.07 1122.64 1125.21 1127.78 1130.36 1132.94 \n' +
    '1135.54 1138.13 1140.73 1143.34 1145.96 1148.58 1151.20 1153.83 0 1156.47 ')