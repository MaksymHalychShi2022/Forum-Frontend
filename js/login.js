async function login (event) {
    event.preventDefault() // Prevent the default form submission

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    try {
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        if (!response.ok) {
            throw new Error(`Login failed: ${response.status}`)
        }

        const token = await response.json()
        console.log(token)
        localStorage.setItem('accessToken', token.access_token) // Save the token or handle login

        window.location.href = 'index.html' // Redirect on successful login
    } catch (error) {
        console.error('Login Error:', error)
        alert('Login failed, check console for more information')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', login)
})
