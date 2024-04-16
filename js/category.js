async function fetchTopics (categoryId) {
    try {
        const response = await fetch(`http://localhost:5000/topics?category_id=${categoryId}`)
        const topics = await response.json()
        renderTopics(topics)
    } catch (error) {
        console.error('Error fetching topics:', error)
        const container = document.getElementById('topic-container')
        container.innerHTML = error
    }
}

function renderTopics (topics) {
    const container = document.getElementById('topic-container')
    container.innerHTML = '' // Clear the container

    topics.forEach(topic => {
        const link = document.createElement('a')
        link.href = `topic.html?topic=${topic.id}`
        link.textContent = topic.title
        link.className = 'menu-link'
        container.appendChild(link)
    })
}

// Fetch and render categories when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search)
    const categoryId = queryParams.get('category')

    if (categoryId) {
        localStorage.setItem('categoryId', categoryId)
        fetchTopics(categoryId)
    } else {
        const categoryId = localStorage.getItem('categoryId')
        fetchTopics(categoryId)
    }
})
