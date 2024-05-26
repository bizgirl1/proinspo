const postsContainer = document.getElementById('posts-container');
const postForm = document.getElementById('post-form');

postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const postText = document.getElementById('post-text').value;
  if (postText.trim() !== '') {
    addPost(postText);
    document.getElementById('post-text').value = '';
  }
});

function addPost(text) {
  const post = document.createElement('div');
  post.className = 'post';
  post.innerHTML = `<p>${text}</p>
                    <div class="comments">
                      <input type="text" placeholder="Write a comment...">
                      <button onclick="addComment(this)">Comment</button>
                    </div>`;
  postsContainer.appendChild(post);
}

function addComment(button) {
  const commentInput = button.previousElementSibling;
  const commentText = commentInput.value;
  if (commentText.trim() !== '') {
    const comment = document.createElement('div');
    comment.className = 'comment';
    comment.textContent = commentText;
    button.parentNode.insertBefore(comment, button);
    commentInput.value = '';
  }
}
