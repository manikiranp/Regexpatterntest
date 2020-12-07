var prompt = require('prompt-sync')();	
console.log("Regex Test:");
var inp=prompt("Enter Pincode: ");
let regex = new RegExp('^[1-9][0 -9]{5}$');
var validation = regex.test(inp);
console.log(inp+" "+validation);