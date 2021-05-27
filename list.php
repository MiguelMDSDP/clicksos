<?php
    function testInput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    function validateLogin($username, $password) {
        if (file_exists('database/users.xml')) {
            $users = simplexml_load_file('database/users.xml');
        } else {
            exit('Falha ao abrir users.xml.');
        }

        $isValid = false;

        foreach($users->children() as $user) {
            if ($user->username == $username && $user->password == $password) {
                $isValid = true;
            }
        }

        return $isValid;
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST" || isset($_COOKIE['user'])) {
        if (validateLogin(testInput($_POST['username']), testInput($_POST['password']))) {
            setcookie('user', testInput($_POST['username']), time() + 3600, '/');
            $GLOBALS['authenticated'] = true;
        } else {
            $GLOBALS['trying'] = true;
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Click S.O.S.</title>

    <link rel="stylesheet" href="assets/styles/main.css">
    <link rel="stylesheet" href="assets/styles/list.css">
    <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">
</head>
<body>
    <?php if (isset($_COOKIE['user']) || $GLOBALS['authenticated']) { ?>
        <main class="table-wrapper">
            <?php 
                if (file_exists('database/os.xml')) {
                    $serviceorders = simplexml_load_file('database/os.xml');
                } else {
                    exit('Falha ao abrir os.xml.');
                }

                foreach($serviceorders->children() as $os) { ?>
                    <section class="item">
                        <div class="icon-container">
                            <img src="assets/images/secondary-logo.png" class="icon" />
                        </div>
                        <div class="title-container">
                            <span class="title">
                                <?php echo($os->title) ?>
                            </span>
                        </div>
                        <div class="description-container">
                            <span class="description">
                                <?php echo($os->description) ?>
                            </span>
                        </div>
                    </section>
                <?php }
            ?>
        </main>

        <footer class="buttons-wrapper">
            <a href="register.php">
                <button class="green-button large-button" id="new-os-button">
                    Nova O.S.
                </button>
            </a>

            <a href="index.php">
                <button class="red-button large-button" id="exit-button">
                    Sair
                </button>
            </a>
        </footer>
    <?php } else if ($GLOBALS['trying']) { ?>
        <h2>Usuário ou senha incorretos. <a href='index.php'>Tente novamente</a></h2>
    <?php } else { header('Location: index.php'); } ?>
</body>

</html>