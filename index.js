//go to next inputfeild
function pressEnterForNext() {
    document.getElementById('user-email').addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById('user-password').focus();
        }
    });
}

//log in by enter key
function pressEnterForLogIn() {
    document.getElementById('user-password').addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById('login-button').click();
        }
    });
}

pressEnterForLogIn();
pressEnterForNext();

//index.html page
document.getElementById('login-button').addEventListener('click', function () {
    //get email
    let userEmail = document.getElementById('user-email');
    userEmail.value;

    //get password
    let userPassword = document.getElementById('user-password');

    //check validity
    if (userEmail.value == "rakib@gmail.com" && userPassword.value == 'rakib') {
        window.location.href = 'bank.html';
    }
    else {
        console.log('invalid')
    }
});

