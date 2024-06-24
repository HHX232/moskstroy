<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']); // Получаем имя
    $tel = htmlspecialchars($_POST['tel']); // Получаем телефон
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL); // Получаем email и валидируем его
    $message = htmlspecialchars($_POST['message']); // Получаем сообщение

    if ($email === false) {
        echo 'Неверный email адрес.';
        exit;
    }

    $to = 'your-email@example.com'; // Замените на ваш email
    $subject = 'Новое сообщение с формы'; // Тема письма
    $body = "Имя: $name\nТелефон: $tel\nEmail: $email\nСообщение:\n$message"; // Тело письма

    $headers = "From: $email\r\n"; // Используем email отправителя
    $headers .= "Reply-To: $email\r\n"; // Адрес для ответа

    // Отправляем письмо
    if (mail($to, $subject, $body, $headers)) {
        echo 'Сообщение отправлено успешно!'; // Сообщение об успешной отправке
    } else {
        echo 'Произошла ошибка при отправке сообщения.'; // Сообщение об ошибке
    }
} else {
    echo 'Неверный метод отправки данных.'; // Сообщение об ошибке метода отправки
}
?>
