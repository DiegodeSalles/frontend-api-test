const insertData = document.getElementById('insertData');
const getData = document.getElementById('getData');

getData.addEventListener('click', listData);
insertData.addEventListener('click', addData);

function deleteData(id) {
  fetch('../projeto_pdo/endpoints/delete_data.php?id=' + id, { method: 'DELETE' })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw Error('Erro ao excluir dados.');
      }
    })
    .then((data) => {
      let p = document.querySelector('#message');
      p.textContent = data.message;
      listData();
    })
    .catch(error => {
      console.log(error);
    })
}

function listData() {
  const div = document.querySelector('#users');
  div.innerHTML = null;

  fetch('../projeto_pdo/endpoints/get_data.php', { method: 'GET' })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw Error('Dados indisponíveis.');
      }
    }).then(data => {
      data.forEach((element) => {
        let p = document.createElement('p');
        let button = `<button id='${element.id}' onclick='deleteData(${element.id})' class='btn btn-outline btn-error delete'>Excluir</button>`;
        let br = document.createElement('br');
        p.innerHTML = element.user + ' - ' + element.password + ' - ' + element.name + ' - ' + element.email + ' - ' + element.phone + ' - ' + button;
        div.appendChild(p);
        div.appendChild(br);
      })
    })
    .catch(error => {
      console.log(error);
    })
}

function addData() {
  const user = {};
  const inputs = document.querySelectorAll('input');

  inputs.forEach((e) => {
    user[e.id] = e.value;
  });

  fetch('../projeto_pdo/endpoints/insert_data.php', { method: 'POST', body: JSON.stringify(user) })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        return response.json().then(data => {
          throw Error(data.error);
        })
      } else {
        throw Error('Erro ao inserir dados.');
      }
    })
    .then((data) => {
      let p = document.querySelector('#message');
      p.textContent = data.message;
      inputs.forEach((e) => {
        e.value = '';
      })
    })
    .catch(error => {
      console.log(error);
    })
}