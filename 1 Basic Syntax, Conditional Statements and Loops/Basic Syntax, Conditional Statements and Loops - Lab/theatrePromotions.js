function theatrePromotions(day, ages) {
    let ticketPrice = 0;

    if (day === 'Weekday') {
        if (ages >= 0 && ages <= 18) {
            ticketPrice = 12;
        } else if (ages >= 18 && ages <= 64) {
            ticketPrice = 18;
        } else if (ages >= 64 && ages <= 122) {
            ticketPrice = 12;
        } else {
            ticketPrice = "Error!";
        }
    }
    if (day === 'Weekend') {
        if (ages >= 0 && ages <= 18) {
            ticketPrice = 15;
        } else if (ages >= 18 && ages <= 64) {
            ticketPrice = 20;
        } else if (ages >= 64 && ages <= 122) {
            ticketPrice = 15;
        } else {
            ticketPrice = "Error!";
        }
    }
    if (day === 'Holiday') {
        if (ages >= 0 && ages <= 18) {
            ticketPrice = 5;
        } else if (ages >= 18 && ages <= 64) {
            ticketPrice = 12;
        } else if (ages >= 64 && ages <= 122) {
            ticketPrice = 10;
        } else {
            ticketPrice = "Error!";
        }
    }

    if (ticketPrice === "Error!") {
        console.log(ticketPrice);
    } else {
        console.log(`${ticketPrice}$`);
    }
}
theatrePromotions('Weekday', -15);