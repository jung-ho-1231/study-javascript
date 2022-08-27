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

// =============================================

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}

// higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)

    console.log(`Transformed by : ${fn.name}`)
}

transformer('Javascript is the best!', upperFirstWord)
transformer('Javascript is the best!', oneWord)