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

console.log(bookings)