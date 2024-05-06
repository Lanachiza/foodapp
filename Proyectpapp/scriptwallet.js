document.addEventListener('DOMContentLoaded', function() {
    const addCardForm = document.getElementById('add-card-form');

    addCardForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        const formData = {
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvv: cvv
        };

        fetch('/add-card', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al agregar la tarjeta');
            }
            return response.json();
        })
        .then(data => {

            console.log('Tarjeta agregada exitosamente:', data);
            alert('Tarjeta agregada exitosamente');
        })
        .catch(error => {
            console.error(error);

            alert('Error al agregar la tarjeta. Por favor, inténtalo de nuevo.');
        });
    });
});
