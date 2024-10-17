function cardGame(game) {
    let type = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
    let power = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };

    let players = {};

    for (let i = 0; i < game.length; i++) {
        let [name, cards] = game[i].split(': ');

        if (players[name]) {
            players[name] = players[name] + ', ' + cards;
        } else {
            players[name] = cards;
        }
    }

    for (const player in players) {

        let array = players[player].split(', ');
        let set = new Set(array);
        array = [...set];
        let sum = 0;

        for (const card of array) {
            let type1 = card.substring(card.length - 1);
            let card1 = card.substring(0, card.length - 1);
            sum = sum + type[type1] * power[card1];
        }

        console.log(`${player}: ${sum}`);
    }
}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);