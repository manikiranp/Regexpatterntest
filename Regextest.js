console.log("Regex Test Pincode:");
let test1="400088";
let test2="A400088";3
let test3="400088B";
let test4="400 088";

var validemails = ["abc@yahoo.com","abc-100@yahoo.com","abc.100@yahoo.com",
			"abc111@abc.com","abc-100@abc.net","abc.100@abc.com.au",
			"abc@1.com","abc@gmail.com.com","abc+100@gmail.com"];
	
var Invalidmails = ["abc","abc@.com.my","abc123@gmail.a","abc123@.com",
			"abc123@.com.com",".abc@abc.com","abc()*@gmail.com","abc@%*.com",
			"abc..2002@gmail.com","abc.@gmail.com","abc@abc@gmail.com",
			"abc@gmail.com.1a","abc@gmail.com.aa.au"];
	
function pinregex(test) {
let regex = new RegExp('^[1-9][0-9]{2}([ ]?)[0-9]{3}$');
var validation = regex.test(test);
console.log(test+" -"+validation);
}
console.log("Regex Test Email:+ The email consists of minimum 3 and optional 2 more parts with mandatory @ and . abc.xyz@bridgelabz.co.in");
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
emailregex("check+one@gmail.com");
emailregex("check#one@gmail.co");
emailregex("check_one@yahoo.co.in");
validemails.forEach(emailregex);
Invalidmails.forEach(emailregex);

