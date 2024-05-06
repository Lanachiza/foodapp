document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = registerForm.elements['name'].value;
        const email = registerForm.elements['email'].value;
        const password = registerForm.elements['password'].value;

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email, password: password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al registrar la cuenta');
            }
            return response.json();
        })
        .then(data => {

            window.location.href = '/inicio'; 
        })
        .catch(error => {
            console.error(error);

        });
    });
});
