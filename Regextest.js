
console.log("Regex Test Pincode:");
let test1="400088";
let test2="A400088";
let test3="400088B"

function pinregex(test) {
let regex = new RegExp('^[1-9][0 -9]{5}$');
var validation = regex.test(test);
console.log(test+" -"+validation);
}

pinregex(test1);
pinregex(test2);
pinregex(test3);