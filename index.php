<?php if (isset($_COOKIE['user'])) setcookie('user', "", -3600, '/'); ?>


<!DOCTYPE html>
<html lang="pt-br">
    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Click S.O.S.</title>

    <link rel="stylesheet" href="assets/styles/main.css">
    <link rel="stylesheet" href="assets/styles/auth.css">
    <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">
</head>

<body>
    <main class="main-container">
        <div class="form-card">
            <img class="main-logo"
                src="assets/images/main-logo.png"
            />

            <form action="list.php" method="POST" class="auth-form" id="auth-form">
                <input class="auth-input"
                    name="username"
                    id="username-input"
                    type="text"
                    placeholder="Nome de Usuário"
                />
                <span class="form-error" id="username-error"></span>

                <input class="auth-input"
                    name="password"
                    id="password-input"
                    type="password"
                    placeholder="Senha"
                />
                <span class="form-error" id="password-error"></span>

                <button class="red-button large-button disabled-button" id="login-button" name="login-button" type="submit">
                    Entrar
                </button>
            </form>
        </div>
    </main>
</body>

<script src="scripts/auth.js"></script>

</html>