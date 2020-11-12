function validateForm() {
    var yname = document.forms["contact"]["yname"];
    var email = document.forms["contact"]["email"];
    var subject = document.forms["contact"]["subject"];
    var message = document.forms["contact"]["message"];

    if (yname.value == "") {
        window.alert("Please enter your Name.");
        yname.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("Please enter a valid E-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf("@", 0) < 0) {
        window.alert("Please enter a valid E-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        window.alert("Please enter a valid E-mail address.");
        email.focus();
        return false;
    }


    if (subject.value == "") {
        window.alert("Please enter a subject.");
        subject.focus();
        return false;
    }

    if (message.value == "") {
        window.alert("Please write something.");
        message.focus();
        return false;
    }


    return true;
}