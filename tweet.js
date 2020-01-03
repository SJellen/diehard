
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const tweet = function () {
    return `Todays a ${weekdays[new Date().getDay()]}`
}

module.export = tweet;