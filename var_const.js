//in a file called var_const.js

var one = '102'
//variables can change
one = '120'

const two = '200';
console.log(two);

//constants can't changes
two = '202';

//two is still '200'
console.log(two);

//doing this cause an error - as one already exists
const one = 71;

//create a script called variables.js
//declaring some variables

var aString = 'this is my string!';
var aNumber = 1002; // a number type
var aDecimal = 1001.75; // still a number type
var aBool = false;
var today = new Date();

console.log(typeof aString);
console.log(typeof aNumber);
console.log(typeof aDecimal);
console.log(typeof aBool);
console.log(today);
