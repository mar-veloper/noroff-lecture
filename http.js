const app = document.querySelector('#app');

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const endpoint = `${API_BASE_URL}/posts`;

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    data.map(
      post =>
        (app.innerHTML += `
    <div>
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    </div>
    `)
    );
  })
  .catch(err => console.log(err));
