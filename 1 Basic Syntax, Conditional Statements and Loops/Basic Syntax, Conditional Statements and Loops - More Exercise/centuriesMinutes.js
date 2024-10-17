function centuriesMinutes(num) {
    let year = num * 100;
    let days = Math.trunc(year * 365.2422);
    let hours = 24 * days
    let min = hours * 60;
    console.log(`${num} centuries = ${year} years = ${days} days = ${hours} hours = ${min} minutes`);
}
centuriesMinutes(5);