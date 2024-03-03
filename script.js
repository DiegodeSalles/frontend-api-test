const baseURL = 'http://localhost/projeto_pdo/endpoints/restful.php';
const insertData = document.getElementById('insertData');
const getData = document.getElementById('getData');
const myModal = document.getElementById('myModal');
const deleteBtn = document.querySelector('.delete_btn');

axios.defaults.baseURL = baseURL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

insertData.addEventListener('submit', handleDataInsert);
getData.addEventListener('click', handleGetData);

async function handleDataInsert(event) {
  event.preventDefault();
  try {
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);
    await axios.post(baseURL, JSON.stringify(jsonData));
    await listIdUser();
  } catch (error) {
    console.log(error);
  }
}

async function handleGetData() {
  try {
    await listIdUser();
  } catch (error) {
    console.log(error);
  }
}

async function deleteData(id) {
  try {
    await axios.delete(`${baseURL}?id=${id}`);
    await listIdUser();
    myModal.close();
  } catch (error) {
    console.log(error);
  }
}

async function listIdUser() {
  try {
    const div = document.querySelector('#users');
    const { data } = await axios.get(baseURL);

    div.innerHTML = '';

    data.forEach((element) => {
      const p = document.createElement('p');
      p.innerHTML = `<button id='${element.id}' class='btn btn-outline btn-accent delete' onclick='getUserData(${element.id})'>${element.user}</button>`;
      div.appendChild(p);
      div.appendChild(document.createElement('br'));
    });
  } catch (error) {
    console.log(error);
  }
}

async function getUserData(id) {
  try {
    const { data } = await axios.get(`${baseURL}?id=${id}`);
    const { name, phone, email, password } = data;

    document.getElementById('user_name').textContent = `User: ${data.user}`;
    document.getElementById('modal_name').value = name;
    document.getElementById('modal_phone').value = phone;
    document.getElementById('modal_email').value = email;
    document.getElementById('modal_password').value = password;

    deleteBtn.id = id;

    openModal(id);
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(id, user) {
  try {
    await axios.put(`${baseURL}?id=${id}`, user);

    const update_user = document.getElementById('update_user_successful');
    const { name, phone, email, password } = user;

    document.getElementById('modal_name').value = name;
    document.getElementById('modal_phone').value = phone;
    document.getElementById('modal_email').value = email;
    document.getElementById('modal_password').value = password;

    update_user.textContent = 'Data has been updated.';
  } catch (error) {
    console.log(error);
  }
}

function openModal(id) {
  const update_user = document.getElementById('update_user_successful');
  const update_btn = document.querySelector('.update_btn');

  if (!update_btn.classList.contains('btn-disabled')) {
    update_btn.classList.toggle('btn-disabled');
  }
  update_user.textContent = '';

  update_btn.removeEventListener('click', handleUpdateUser);

  myModal.showModal();
  deleteBtn.addEventListener('click', () => deleteData(id));
  document.querySelector('#closeModal').addEventListener('click', () => myModal.close());
  document.querySelectorAll('.modal_form_data').forEach((e) => {
    e.addEventListener('input', () => update_btn.classList.remove('btn-disabled'));
  });

  update_btn.addEventListener('click', handleUpdateUser);

  function handleUpdateUser() {
    const name = document.getElementById('modal_name').value;
    const phone = document.getElementById('modal_phone').value;
    const email = document.getElementById('modal_email').value;
    const password = document.getElementById('modal_password').value;

    const user = { name, phone, email, password };
    updateUser(id, user);
  }
}
