function aMinerTask(input) {
    let resourceObj = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let qty = Number(input[i + 1]);

        if (resourceObj[resource]) {
            resourceObj[resource] += qty;
        } else {
            resourceObj[resource] = qty;
        }
    }

    let entries = Object.entries(resourceObj);

    for (let [resource, qty] of entries) {
        console.log(`${resource} -> ${qty}`);
    }
} aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);