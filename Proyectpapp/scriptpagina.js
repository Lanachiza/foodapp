document.addEventListener('DOMContentLoaded', function() {

    fetch('/account-info')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener la información de la cuenta');
            }
            return response.json();
        })
        .then(data => {

            const accountInfoElement = document.getElementById('account-info');
            accountInfoElement.innerHTML = `
                <p>Nombre: ${data.name}</p>
                <p>Correo Electrónico: ${data.email}</p>
                <!-- Agregar más información de la cuenta según sea necesario -->
            `;
        })
        .catch(error => {
            console.error(error);

        });
});
