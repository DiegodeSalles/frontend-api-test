
<!DOCTYPE html>
<html data-theme="dim" lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>

  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.7.2/dist/full.min.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="min-h-dvh">
  <div class="">


    <div class="form-control">
      <form class="flex flex-col items-center" id="insertData" method="POST">
        <h1 class="text-slate-950">Testes com PDO</h1>
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
        <label class="input input-bordered w-full max-w-xs items-center gap-2 flex" for="name">
          Nome:
          <input type="text" class="grow" value="1111" placeholder="Diego" name="name" id="name">
        </label>
        <br>
        <label class="input input-bordered w-full max-w-xs items-center gap-2 flex" for="email">
          Email:
          <input type="text" class="grow" value="1111" placeholder="diego@gmail.com" name="email" id="email">
        </label>
        <br>
        <label class="input input-bordered w-full max-w-xs items-center gap-2 flex" for="phone">
          Telefone:
          <input type="text" class="grow" value="1111" placeholder="111111111" name="phone" id="phone">
        </label>
        <br>
        <div class="flex gap-1">
          <button type="submit" class="btn btn-primary" id="submit">Insert Data</button>
          <button class="btn btn-info" id="getData">Get Data</button>
        </div>
      </form>
    </div>


    <p id="message"></p>

    <div id="users"></div>

    <?php include 'modal.html'; ?>
    <script src="script.js"></script>
  </div>
</body>

</html>