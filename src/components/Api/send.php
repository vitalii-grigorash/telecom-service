<meta http-equiv='refresh' content='10; url=http://thecode.local/'>

<meta charset="UTF-8" />

<?php
    // Получаем значения переменных из пришедших данных
    $name = $_POST['name'];
    $number = $_POST['number'];
    $description = $_POST['description'];
    // Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме
    $mes = "Имя: $name \nТелефон: $number \nКомментарий: $description";
    // Если нужно, чтобы письма всё время уходили на ваш адрес — замените первую переменную $email на свой адрес электронной почты
    $send = mail('vitalii.grigorash@gmail.com', 'Форма обратной связи', $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:'vitalii.grigorash@gmail.com'");
    // Если отправка прошла успешно — так и пишем
    if ($send == 'true') {echo "Сообщение отправлено";}
    // Если письмо не ушло — выводим сообщение об ошибке
    else {echo "Ой, что-то пошло не так";}
?>
