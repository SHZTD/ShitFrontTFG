document.getElementById('insertForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const estado = document.getElementById('estado').value;

    if (!estado) {
        alert("Por favor, selecciona un estado.");
        return;
    }

    // Construir la URL de la API con el valor del estado seleccionado
    const apiUrl = `http://192.168.22.115:6969/alumno/insert?estadoPractica=${encodeURIComponent(estado)}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'GET', // enviando parámetros en la URL
            headers: {
                'Content-Type': 'application/json',
            },
        });

        /*
            if (response.ok) {
                const result = await response.json();
                console.log('Insert correct');
                alert('Todo correcto, respuesta: ' + result.message);
            } else {
                console.log('Error al insertar en la base de datos.');
                alert('Inserción fallida en la base de datos.');
            }
        */
    } catch (error) {
        console.error('Ocurrió un error durante la inserción:', error);
        alert('La API está caída o ocurrió un error.');
    }
});