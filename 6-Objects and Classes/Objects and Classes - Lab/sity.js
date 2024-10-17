function sity(info) {
    for (const key of Object.keys(info)) {
        console.log(`${key} -> ${info[key]}`);
    }
}
sity({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});