var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.format('x'));
// console.log(now.valueOf());

// now.subtract(1, 'year');

// console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mm:a'));  //Oct 5th 2015, 6:45 pm

// Convert from Unix Timestamp
var timestamp = now.valueOf(); //1462444356417;
console.log(timestamp);
var timestampMoment = moment.utc(timestamp);
console.log(moment.utc(timestamp).local().format('h:mm:a'));

console.log(timestampMoment.local().format('h:mm:a'));  //11:06 am
console.log(moment.utc(timestamp).local().format('h:mm:a'));

