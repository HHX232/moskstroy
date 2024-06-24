<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars($_POST['name']);
    $tel = htmlspecialchars($_POST['tel']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Формируем сообщение
    $to = 'your-email@example.com'; // Замените на ваш email
    $subject = 'Новое сообщение с формы';
    $body = "Имя: $name\nТелефон: $tel\nEmail: $email\nСообщение:\n$message";

    $headers = "From: webmaster@example.com\r\n"; // Замените на ваш адрес
    $headers .= "Reply-To: $email\r\n";

    // Отправляем письмо
    if (mail($to, $subject, $body, $headers)) {
        echo 'Сообщение отправлено успешно!';
    } else {
        echo 'Произошла ошибка при отправке сообщения.';
    }
} else {
    echo 'Неверный метод отправки данных.';
}
?>
