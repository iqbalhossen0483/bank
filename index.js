
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

