<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    // От кого письмо

    $mail->setForm('vitalii.grigorash@yandex.ru', 'От кого письмо');

    // Кому отправить

    $mail->addAddress('vitalii.grigorash@gmail.com');

    // Тема письма

    $mail->Subject = 'Тема письма';

    // Тело письма

    $body = '<h1>Встречайте спер письмо!</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</stong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['number']))){
        $body.='<p><strong>Номер телефона:</stong> '.$_POST['number'].'</p>';
    }
    if(trim(!empty($_POST['description']))){
        $body.='<p><strong>Комментарии:</stong> '.$_POST['description'].'</p>';
    }

    $mail->Body = $body;

    // Отправляем

    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-Type: application/json');

    echo json_encode($response);
?>
