async function fetchCategories () {
    try {
        const response = await fetch('http://localhost:5000/categories')
        const categories = await response.json()
        renderCategories(categories)
    } catch (error) {
        console.error('Error fetching categories:', error)
        const container = document.getElementById('categories-container')
        container.innerHTML = error
    }
}

function renderCategories (categories) {
    const container = document.getElementById('categories-container')
    container.innerHTML = '' // Clear the container

    categories.forEach(category => {
        const link = document.createElement('a')
        link.href = `category.html?category=${category.id}`
        link.textContent = category.title // Assuming your API returns an object with a name property
        link.className = 'menu-link'
        container.appendChild(link)
    })
}

// Fetch and render categories when the page loads
document.addEventListener('DOMContentLoaded', fetchCategories)
