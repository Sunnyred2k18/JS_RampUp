function checkEmail() {
	var email = document.getElementById("email").value;

	// Regular expression for email validation
	var emailRegex =  /^[a-zA-Z0-9._]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/;
   
	// Check if email is valid
	if (emailRegex.test(email)) {
		document.getElementById("result").innerHTML = email + " is a VALID email address";
       // alert("This email address is VALID")
	} else {
		document.getElementById("result").innerHTML = email + " email address in NOT VALID";
	}
}
