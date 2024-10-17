function nextDay(year, month, day) {
    if (day >= 30) {
        day = 1;
        month += 1;
    } else if (day >= 1 && day <= 29) {
        day += 1;
    }
    if (year >= 1 && year <= 1 ) {
        year += 1900;
    }
    console.log(`${year}-${month}-${day}`);
}


nextDay(1, 9, 6);