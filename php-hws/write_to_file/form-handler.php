<?php
// обработка данных формы регистрации
$server = $_SERVER;
if ($server['REQUEST_METHOD'] === 'POST') {
    $post = $_POST;
    $login = $post['login'];
    $pass = $post['password'];
    //чтение из файла
    $file_name = 'regData.txt';
    $arr_from_file = file($file_name, FILE_SKIP_EMPTY_LINES | FILE_IGNORE_NEW_LINES);

    function checkLogin ($arrLogin,$login): bool {
        foreach ($arrLogin as $item) {
            $sep_item = explode(',',$item);
            if ($login !== $sep_item[0]) return true;
        }
    }

    if (checkLogin($arr_from_file,$login) === false ) {
        $data = $post['login'] . ',' . $post['password'];
        if (file_put_contents($file_name, $data . PHP_EOL, FILE_APPEND | LOCK_EX) !== false) {
//            var_dump('Данные с переносом строки успешно записаны');
        }
        $answer = [
            'message' => 'success',
            'reason' => 'Вы зарегистрированы'
        ];
    } else {
        $answer = [
            'message' => 'error',
            'reason' => 'Такой логин уже существует'
        ];
    }
    echo json_encode($answer);

}

