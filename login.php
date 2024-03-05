<!DOCTYPE html>

<html data-theme="dim" lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.7.2/dist/full.min.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
  <div class="form-control">
    <form class="flex flex-col items-center mb-2" id="userLogin" method="POST">

      <label class="input input-bordered w-full max-w-xs items-center gap-2 flex" for="user">
        Usuário:
        <input type="text" class="grow" value="1111" placeholder="teste" name="user" id="user">
      </label>
      <br>
      <label class="input input-bordered w-full max-w-xs items-center gap-2 flex" for="password">
        Senha:
        <input type="password" class="grow" value="1111" name="password" id="password">
      </label>
      <br>

      <br>
      <div class="flex gap-1">
        <button type="submit" class="btn btn-primary" id="loginBtn">Login</button>
      </div>
    </form>
  </div>
  <script>
    const baseURL = 'http://localhost/projeto_pdo/controller/restful.php';
    const username = document.getElementById('user');
    const password = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    axios.defaults.baseURL = baseURL;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    loginBtn.addEventListener('click', loginTest);

    async function loginTest(event) {

      event.preventDefault();

      try {
        // const formData = new FormData(event.target);
        // const jsonData = Object.fromEntries(formData);
        const {
          data
        } = await axios.post(baseURL, {
          user: username.value,
          password: password.value
        });

        sessionStorage.setItem('session', data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  </script>
</body>

</html>