// Popups
function signupSuccessful() {
    alert('Signup successful');
}

function loginSuccessful() {
    alert('Login successful');
}

//JSON files
function submitSignupForm() {
    event.preventDefault();

    var contact = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        name: document.getElementById('name').value
    };

    console.log(contact);
    window.location.href = 'index.html';
    return false;
}

function submitLoginForm() {
    event.preventDefault();

    var contact = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
      

    console.log(contact);
    window.location.href = 'index.html';
    return false;
}
