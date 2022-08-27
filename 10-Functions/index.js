const bookings = [];

const createBooks = function (flightNum, numPassengers, price) {

    // ES5
    numPassengers = numPassengers || 1
    price = price || 199

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