document.addEventListener('DOMContentLoaded', function() {

    fetch('/order-history')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener el historial de pedidos');
            }
            return response.json();
        })
        .then(data => {

            const orderHistoryElement = document.getElementById('order-history');
            data.forEach(order => {
                const listItem = document.createElement('li');
                listItem.textContent = `Pedido #${order.id}: ${order.total}`;
                orderHistoryElement.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error(error);

        });
});
