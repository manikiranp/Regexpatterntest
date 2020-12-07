

console.log("Regex Test Pincode:");
let test1="400088";
let test2="A400088";3
let test3="400088B";
let test4="400 088";
function pinregex(test) {
let regex = new RegExp('^[1-9][0-9]{2}([ ]?)[0-9]{3}$');
var validation = regex.test(test);
console.log(test+" -"+validation);
}
console.log("Regex Test Email:+ The email consists ofminimum 3 and optional 2 more parts with mandatory @ and . abc.xyz@bridgelabz.co.in");
function emailregex(test) {
let regex = new RegExp('^([a-z]+)([_+.-]?)([a-z0-9]+)@([A-Za-z0-9]+).([a-z]{2,3})((.[a-z]{2,3})?)$');
var validation = regex.test(test);
console.log(test+" -"+validation);
}
pinregex(test1);
pinregex(test2);
pinregex(test3);
pinregex(test4);
emailregex("example.test@gmail.co");


