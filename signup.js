var name=document.forms["register"]["name"];
var surname=document.forms["register"]["surname"];
var email=document.forms["register"]["email"];
var pass =document.forms["register"]["password"];
var passConfirm =document.forms["register"]["pass-confirmation"];

var nameError=document.getElementById("inputName");
var surnameError=document.getElementById("inputSurname");
var emailError=document.getElementById("inputEmail");
var passError=document.getElementById("inputPassword");

nameError.addEventListener("blur", nameVerify, true);
surnameError.addEventListener("blur", surnameVerify, true);
emailError.addEventListener("blur", emailVerify, true);
passError.addEventListener("blur", passVerify, true);

function Validate(){
	if(name.value==""){
		name.style.border="1px solid red";
		nameError.textContent="Name is required";
		name.focus();
		return false;
	}
	if(surname.value==""){
		surname.style.border="1px solid red";
		surnameError.textContent="Surname is required";
		surname.focus();
		return false;
	}
	if(email.value==""){
		email.style.border="1px solid red";
		emailError.textContent="Email is required";
		email.focus();
		return false;
	}

	if(pass.value==""){
		pass.style.border="1px solid red";
		passError.textContent="password is required";
		pass.focus();
		return false;
	}
	if(pass.value!= passConfirm.value){
		pass.style.border="1px solid red";
		passconfirm.style.border="1px solid red";
		passError.innerHTML="Two password don't match";
		return false;
	}
}
function nameVerify(){
	if (name.value!=""){
		name.style.border="1px solid green";
		nameError.innerHTML="";
	    return true;
		}
}
function surnameVerify(){
	if (surname.value!=""){
		surname.style.border="1px solid green";
		surnameError.innerHTML="";
	    return true;
		}
}
function emailVerify(){
	if (email.value!=""){
		email.style.border="1px solid green";
		emailError.innerHTML="";
	    return true;
		}
}
function passVerify(){
	if (pass.value!=""){
		pass.style.border="1px solid green";
		passError.innerHTML="";
	    return true;
		}
}