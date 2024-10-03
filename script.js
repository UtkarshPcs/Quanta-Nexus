// Function to handle post submission
function uploadPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('image');
    const image = imageInput.files[0];

    if (title && content) {
        // Create a new post div
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        // Add title
        const postTitle = document.createElement('h3');
        postTitle.textContent = title;
        postDiv.appendChild(postTitle);

        // Add content
        const postContent = document.createElement('p');
        postContent.textContent = content;
        postDiv.appendChild(postContent);

        // Add image if uploaded
        if (image) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const postImage = document.createElement('img');
                postImage.src = e.target.result;
                postDiv.appendChild(postImage);
            };
            reader.readAsDataURL(image);
        }

        // Add the post to the posts section
        document.getElementById('posts').appendChild(postDiv);

        // Clear the form
        document.getElementById('upload-form').reset();
    } else {
        alert('Please fill out both the title and content.');
    }
}
