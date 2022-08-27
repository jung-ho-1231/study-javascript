const bookings = [];

const createBooks = function (flightNum, numPassengers = 1, price = 199) {

    const booking = {
        flightNum,
        numPassengers,
        price
    };

    bookings.push(booking);
};


createBooks('LH123')
createBooks('LH123', undefined, 1000)

// ============================================================

const flight = 'LH234';
const jonas = {
    name : 'jung ho',
    passport : 212321312414
}

const newPassport = function (person){
    person.passport = Math.trunc(Math.random() * 10000);
}

newPassport(jonas);

