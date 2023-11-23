import './index.html';
import './styles.css';

let posts = [];
const postsURL = 'https://jsonplaceholder.typicode.com/posts';

async function request(url) {
  const response = await fetch(url).then((response) => response.json());

  return response;
}

function render(dataContent) {
  document.querySelector('.posts').innerHTML = '';

  for (const post of dataContent) {
    document.querySelector('.posts').innerHTML += `
    <div class="post_item">
      <h3>${post.title}</h3>
      <span>${post.body}</span>
      <button id=${post.id} class="btn_remove">Удалить</button>
    </div>
    `;
  }
}

function search(inputValue) {
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  render(filteredPosts);
}

function removePost(id) {
  posts = posts.filter((post) => post.id !== id);
  render(posts);
}

document.querySelector('.filter_input').addEventListener('input', function (e) {
  search(e.target.value);
});

document.querySelector('.posts').addEventListener('click', function (e) {
  if (e.target.id) {
    removePost(Number(e.target.id));
  }
});

document.addEventListener('DOMContentLoaded', async () => {
  posts = await request(postsURL);
  render(posts);
});
