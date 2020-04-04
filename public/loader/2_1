<?php
include_once("bot.php");
if($link)
    echo 'Соединение установлено.';
else
    die('Ошибка подключения к серверу баз данных.');

$dataSet = $_POST;

if (!$dataSet)
    exit('Ошибка платежа');

unset($dataSet['ik_sign']); // удаляем из данных строку подписи
ksort($dataSet, SORT_STRING); // сортируем по ключам в алфавитном порядке элементы массива
array_push($dataSet, 'XNznWn0EXgCaPaBp'); // добавляем в конец массива "секретный ключ"
$signString = implode(':', $dataSet); // конкатенируем значения через символ ":"
$sign = base64_encode(md5($signString, true)); // берем MD5 хэш в бинарном виде по сформированной строке и кодируем в BASE64


if ($sign != $_POST['ik_sign'])
    exit('Ошибка обработки платежа');

$sql = mysqli_query($link, "INSERT INTO `payments`(`uid`, `amount`) VALUES ('{$_POST['ik_pm_no']}', '{$_POST['ik_am']}')");

$vk->sendMessage($_POST['ik_pm_no'], "Вы пополнили баланс на {$_POST['ik_am']} рублей");

?>
