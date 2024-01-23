document.getElementById('password').addEventListener('input', function(e) {
    const password = e.target.value;
    const lowercaseMet = /[a-z]/.test(password);
    const uppercaseMet = /[A-Z]/.test(password);
    const numberMet = /\d/.test(password);
    const lengthMet = password.length >= 8;

    // Check lowercase letters
    document.getElementById('lowercase').classList.toggle('met', lowercaseMet);

    // Check uppercase letters
    document.getElementById('uppercase').classList.toggle('met', uppercaseMet);

    // Check numbers
    document.getElementById('number').classList.toggle('met', numberMet);

    // Check length
    document.getElementById('length').classList.toggle('met', lengthMet);

    // Check if all requirements are met
    const allMet = lowercaseMet && uppercaseMet && numberMet && lengthMet;
    document.getElementById('checkmark').style.display = allMet ? 'inline' : 'none';
    document.getElementById('password-requirements').style.display = allMet ? 'none' : 'block';
});
