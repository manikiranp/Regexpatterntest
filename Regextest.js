
console.log("Regex Test Pincode:");
var test1="400088";
let regex = new RegExp('^[1-9][0 -9]{5}$');
var validation = regex.test(test1);
console.log(test1+" "+validation); 