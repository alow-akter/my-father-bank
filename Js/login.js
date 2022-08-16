//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //step-2: get the email address inside the email input filed
    //always remember to use .value to get text from a input filed

    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;

    //step-3: get password
    //3.a: set id on the html element
    //3.b: get the element 
    //3.c: get value from the element

    const passwordFlied = document.getElementById('user-password');
    const password = passwordFlied.value;

    //DANGER : DO NOT VERIFY email password on the client side
    // step-4: verify email and password and whether valid user or not

    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
        // console.log('valid user');
    }
    else {
        alert('tui password bulr gecot !! toke ami tejjo sontan korlam.');
    }
})
