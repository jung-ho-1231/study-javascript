const bookings = [];

const createBooks = function (flightNum, numPassengers, price) {

    const booking = {
        flightNum,
        numPassengers,
        price
    };

    console.log(booking)
    bookings.push(booking);
};


createBooks('LH123')

console.log(bookings)