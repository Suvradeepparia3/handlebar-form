function validateForm() {

    var name = document.forms["myForm"]["fname"].value;
    var email = document.forms["myForm"]["femail"].value;
    var phone = document.forms["myForm"]["fphone"].value;

    // requiredfield check
    requiredFieldCheck(name, email, phone);

    // email and phpne validation
    emailAndPhoneValidation(name, email, phone);


    return false;
};

function requiredFieldCheck(name, email, phone) {
    if (name == '' || email == '' || phone == '') {
        document.getElementById('heading').style.color = 'red';
        document.getElementById('heading').innerHTML = 'Error submitting the form.';
    }

    if (name == '') {
        document.getElementById('nameField').style.border = '2px solid red';
        document.getElementById('nameLabel').style.color = 'red';
        document.getElementById('nameInputError').style.display = 'flex';
    } else {
        document.getElementById('nameField').style.border = '';
        document.getElementById('nameLabel').style.color = '';
        document.getElementById('nameInputError').style.display = '';
    }
    if (email == '') {
        document.getElementById('emailField').style.border = '2px solid red';
        document.getElementById('emailLabel').style.color = 'red';
        document.getElementById('emailInputError').style.display = 'flex';
    } else {
        document.getElementById('emailField').style.border = '';
        document.getElementById('emailLabel').style.color = '';
        document.getElementById('emailInputError').style.display = '';
    }
    if (phone == '') {
        document.getElementById('phoneField').style.border = '2px solid red';
        document.getElementById('phoneLabel').style.color = 'red';
        document.getElementById('phoneInputError').style.display = 'flex';
    } else {
        document.getElementById('phoneField').style.border = '';
        document.getElementById('phoneLabel').style.color = '';
        document.getElementById('phoneInputError').style.display = '';
    }

}

function emailAndPhoneValidation(name, email, phone) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(mailformat)) {
        var phoneno = /^\d{10}$/;
        if ((phone.match(phoneno))) {
            afterSave(name, email, phone);
        }
        else {
            alert('Invalid phopne');
        }

    }
    else {
        alert('Invalid email');
    }
}

function afterSave(name, email, phone) {

    var label = {
        data: [{ userName: name, userEmail: email, userPhone: phone }]
    };


    var source = document.getElementById("form-template").innerHTML;

    var template = Handlebars.compile(source);

    var html = template(label);

    document.getElementById("form-container").innerHTML = html;
    document.getElementById("nameField").value = '';
    document.getElementById("emailField").value = '';
    document.getElementById("phoneField").value = '';

    document.getElementById('heading').innerHTML = 'Form successfully submitted!';
    document.getElementById('heading').style.color = 'green';

}

