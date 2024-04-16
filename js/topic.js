async function fetchComments(topicId) {
    try {
        const response = await fetch(`http://localhost:5000/comments?topic_id=${topicId}`);
        const comments = await response.json();
        renderComments(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        const container = document.getElementById('comments-container');
        container.innerHTML = error;
    }
}

function renderComments(comments) {
    const container = document.querySelector('.container'); // Assuming you want to append comments to this container

    // Clear existing comments
    container.querySelectorAll('.comment').forEach(e => e.remove());

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';

        commentElement.innerHTML = `
            <div class="comment-autor">${comment.user.username}<span class="comment-timestamp">, ${new Date(comment.created_at).toLocaleString()}</span></div>
            <div class="comment-body">${comment.body}</div>
        `;

        // Append separator before appending the comment element if you want to keep separators between comments
        const separator = document.createElement('div');
        separator.className = 'separator';

        container.appendChild(commentElement);
        container.appendChild(separator);
    });
}

async function addComment() {
    const commentText = document.getElementById('new-comment-text').value;
    if (!commentText.trim()) {
        alert('Please write a comment before submitting!');
        return;
    }

    const accessToken = localStorage.getItem("accessToken")
    console.log("token", accessToken)
    if (!accessToken) {
        alert("Login to write a comment");
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                topic_id: "e0e2ebf6-897d-4665-9575-504965323ddd",
                body: commentText,
                // Add other data fields if necessary
            }),
        });

        if (!response.ok) {
            console.log("error", response.massage)
        }

        const responseData = await response.json();
        console.log('Success:', responseData);
        document.getElementById('new-comment-text').value = '';  // Clear the textarea on success
        window.location.reload()

    } catch (error) {
        console.error('Error:', error);
        alert('Failed to post comment');  // Provide user feedback on failure
    }
}

// Fetch and render categories when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const topicId = queryParams.get('topic');

    if (topicId) {
        localStorage.setItem("topicId", topicId)
        fetchComments(topicId);
    }
});
