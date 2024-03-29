document.getElementById('password').addEventListener('input', function(e) {
    const password = e.target.value;
    const lowercaseMet = /[a-z]/.test(password);
    const uppercaseMet = /[A-Z]/.test(password);
    const numberMet = /\d/.test(password);
    const lengthMet = password.length >= 8;

    document.getElementById('lowercase').classList.toggle('met', lowercaseMet);
    document.getElementById('uppercase').classList.toggle('met', uppercaseMet);
    document.getElementById('number').classList.toggle('met', numberMet);
    document.getElementById('length').classList.toggle('met', lengthMet);

    const allMet = lowercaseMet && uppercaseMet && numberMet && lengthMet;
    document.getElementById('checkmark').style.display = allMet ? 'inline' : 'none';
    document.getElementById('password-requirements').style.display = allMet ? 'none' : 'block';
});

document.getElementById('passwordConfirm').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;

    
    const passwordsMatch = password === passwordConfirm;

    document.getElementById('passwordMatchNotice').style.display = passwordsMatch ? 'inline' : 'none';
    document.getElementById('passwordMismatchNotice').style.display = !passwordsMatch ? 'inline' : 'none';

    if (passwordsMatch) {
        submitButton.disabled = false;
        submitButton.classList.remove('submitButton-disabled');
    } else {
        submitButton.disabled = true;
        submitButton.classList.add('submitButton-disabled');
    }
});
