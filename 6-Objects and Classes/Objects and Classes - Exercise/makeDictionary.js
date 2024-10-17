function makeADictionary(info) {
    let infoObj = {};
 
    for (let i = 0; i < info.length; i++) {
        let convInfo = JSON.parse(info[i]);
        let key = Object.keys(convInfo)[0];
        let value = Object.values(convInfo)[0];
        infoObj[key] = value;
    }

    let sorted = Object.keys(infoObj);
    sorted.sort((a, b) => a.localeCompare(b));
 
    for (key of sorted) {
        console.log(`Term: ${key} => Definition: ${infoObj[key]}`);
    }
}

makeADictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ]);