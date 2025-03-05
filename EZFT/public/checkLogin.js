document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // api url con parametros
    const apiUrl = `http://192.168.22.115:6969/login?user=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

    try {
        // request a la api
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const result = await response.json(); // undefined
            console.log('Login attempt correct.')
            alert('All good, response: ' + result.message);
        } else {
            console.log('Incorrect login attempt')
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('Error occurred during login:', error);
        alert('An error occurred. Please try again.');
    }
});