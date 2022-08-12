
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {
    let newDrivers = [...drivers.slice(0, 2)];
    return newDrivers;
}

const returnLastTwoDrivers = function (drivers) {
    let newDrivers = [...drivers.slice(drivers.length - 2)];
    return newDrivers;
}

//
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function (fare = 5) {
        return fare * int;
}
 }

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function (fare) {
  
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers,last) {
    return last(drivers);
 }
