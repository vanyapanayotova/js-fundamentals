function inventory(arr) {
    let heros = [];

    for (let i = 0; i < arr.length; i++) {
        let [hero, level, items] = arr[i].split(' / ');
        level = Number(level);

        let heroObj = { hero, level, items };
        heros.push(heroObj);
    }

    let sortedHeros = heros.sort((a, b) => a.level - b.level);

    for (const hero of sortedHeros) {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);