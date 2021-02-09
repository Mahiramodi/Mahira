var submit = document.getElementById("formbtn");
var comment = document.getElementById("Textarea1");
var email = document.getElementById("exampleInputEmail1");
comment.style.fontSize = "2rem";





function sendMail() {
    if (comment.value != "" && email.value != "" && email.value.includes("@")) {
        alert("Successfull");
        window.location.href = "https://mail.google.com/mail/u/0/#inbox?compose=new";

    } else {

        alert("UnSuccessfull");


    }
}