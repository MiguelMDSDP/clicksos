<!DOCTYPE html>

<html lang="pt-br">
    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Click S.O.S.</title>

    <link rel="stylesheet" href="assets/styles/main.css">
    <link rel="stylesheet" href="assets/styles/register.css">
    <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">
</head>

<body>
    <main class="main-container">
        <?php if (isset($_COOKIE['user'])) {
            echo("<script>console.log('YO')</script>");?>
            <div class="form-card">
                <img class="main-logo"
                    src="assets/images/main-logo.png"
                />

                <form action="" method="POST" class="register-form" id="register-form">
                    <input class="register-input"
                        name="title"
                        id="title-input"
                        type="text"
                        placeholder="Título"
                    />
                    <span class="form-error" id="title-error"></span>

                    <textarea class="register-textarea"
                        name="description"
                        id="description-textarea"
                        type="description"
                        placeholder="Descrição"
                        cols="50"
                        rows="5"
                        maxlength="250"
                    ></textarea>
                    <span class="form-error" id="description-error"></span>

                    <div class="buttons-wrapper">
                        <button class="green-button small-button disabled-button" id="register-button" type="submit">
                            Entrar
                        </button>
                        <a href="./list.php">
                            <button class="red-button small-button" id="cancel-button" type="button">
                                Cancelar
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        <?php } else { header('Location: index.php'); } ?>
    </main>
</body>

<script src="scripts/register.js"></script>

</html>