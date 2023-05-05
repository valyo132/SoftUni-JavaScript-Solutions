const loadPostsBtn = document.getElementById('btnLoadPosts');
const viewPostBtn = document.getElementById('btnViewPost');
const postsSelect = document.getElementById('posts');

loadPostsBtn.addEventListener('click', loadPosts);
viewPostBtn.addEventListener('click', attachEvents);

let selectedPostTitle = '';
let selectedPostBody = '';

function attachEvents() {
    const COMMETS_URL = 'http://localhost:3030/jsonstore/blog/comments';
    const postTitle = document.getElementById('post-title');
    const postComments = document.getElementById('post-comments');
    const postBody = document.getElementById('post-body');
    let selectedPostId = postsSelect.value;
    getPost(selectedPostId);

    while (postComments.firstChild) {
        postComments.removeChild(postComments.firstChild);
    }

    fetch(COMMETS_URL)
        .then((res) => res.json())
        .then((data) => {
            for (const key in data) {
                let { id, postId, text } = data[key];
                postTitle.textContent = selectedPostTitle;
                postBody.textContent = selectedPostBody;
                if (postId === selectedPostId) {
                    const li = document.createElement('li');
                    li.id = id;
                    li.textContent = text;
                    postComments.appendChild(li);
                }
            };
        })
}

function loadPosts() {
    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';

    fetch(POSTS_URL)
        .then((res) => res.json())
        .then((data) => {
            for (const key in data) {
                let { _body, id, title } = data[key];
                const option = document.createElement('option');
                option.value = id;
                option.textContent = title.toUpperCase();
                postsSelect.appendChild(option);
            };
        });
}

function getPost(postId) {
    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';

    fetch(POSTS_URL)
        .then((res) => res.json())
        .then((data) => {
            for (const key in data) {
                let { body, id, title } = data[key];
                if (id === postId) {
                    selectedPostBody = body;
                    selectedPostTitle = title;
                }
            };
        });
}

//attachEvents();