const baseURL = 'http://localhost/projeto_pdo/controller/restful.php';
const insertDataBtn = document.getElementById('insertData');
const getDataBtn = document.getElementById('getData');
const deleteBtn = document.querySelector('.delete_btn');

axios.defaults.baseURL = baseURL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

getDataBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getUserData();
})

function createTable(data) {
  const table = document.createElement('table');
  const div = document.getElementById('users');
  const tr = document.createElement('tr');
  const keys = Object.keys(data[0]);

  keys.forEach((e) => {
    const th = document.createElement('th');
    let formattedKey = e[0].toUpperCase() + e.slice(1);
    th.textContent = formattedKey;
    tr.appendChild(th);
  });
  
  table.appendChild(tr);
  const th = document.createElement('th');
  table.appendChild(tr);
  table.appendChild(tr);

  data.forEach((user) => {
    const tr = document.createElement('tr');
    tr.classList.add('hover');
    tr.innerHTML = `<td>${user.id}</td>`;
    tr.innerHTML += `<td>${user.name}</td>`;
    tr.innerHTML += `<td>${user.email}</td>`;
    tr.innerHTML += `<td>${user.phone}</td>`;
    tr.innerHTML += `<td>${user.user}</td>`;
    tr.innerHTML += `<td>${user.password}</td>`;
    tr.innerHTML += `<td><button class='btn btn-success'>Teste</button></td>`;
    tr.innerHTML += `<td><button class='btn btn-warning'>Teste 2</button></td>`;
    table.appendChild(tr);
  });

  table.classList.add('table');
  table.classList.add('glass');
  table.classList.add('!bg-none');
  table.classList.add('table-fixed');
  div.appendChild(table);
}

async function getUserData() {
  try {
    const div = document.getElementById('users');
    const { data } = await axios.get(baseURL);

    div.innerHTML = '';

    createTable(data);

  } catch (error) {
    console.log(error);
  }
}