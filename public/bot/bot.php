<?php
include_once("vk_api.php");
if(!isset($_REQUEST)){return;}
$link = new mysqli("localhost", "loki","Shalnev23725","lokisoft");

$confirmation_token = '454f92fa';
$token = '8da78c77bbd7188cde7277cf8bdea4c36e9c315a0bf29de7f47a68dbce305ae2137807a5d23e95db1097d';

/* KNOPKI */
const BTN_PROF1 = [["menu" => 'search'], "Статистика", "blue"];
const BTN_PROF2 = [["menu" => 'help'], "Профиль", "white"];
const BTN_PROF3 = [["menu" => 'plays'], "Новости", "green"];


$vk = new vk_api($token, "5.80");
$data = json_decode(file_get_contents('php://input'));
switch ($data->type) {
    case 'confirmation': echo $confirmation_token; break;
    case 'message_new':
	$user_id    = $data->object->from_id;
        $peer_id    = $data->object->peer_id;
        $user_info  = json_decode(file_get_contents("https://api.vk.com/method/users.get?user_ids={$user_id}&access_token={$token}&v=5.0"));
        $user_name  = $user_info->response[0]->first_name;
        $body       = mb_strtolower($data->object->text);
        $user_stat  = GetUserStats($user_id);
        $key        = json_decode($data->object->payload);


	if(preg_match("/^начать$/", $body)){
 		$vk->sendButton($peer_id, 'Сохраните UID, перед использованием кнопок',[[BTN_PROF1, BTN_PROF2],[BTN_PROF3]]);

        }elseif(preg_match("/^статистика$/", $body)){
		
		$all_money = 0;	
		$clipper =  mysqli_query($link, "SELECT * FROM `clipper` WHERE id_base = {$user_stat['id']}");
		while($row = mysqli_fetch_array($clipper)){
			$all_money = $row['money'] + $all_money;	
		}
		$query = mysqli_query($link, "SELECT COUNT(*) FROM logs WHERE id_base = '".$user_stat['id']."'");
		$count = mysqli_fetch_row($query)[0];
		
		$vk->sendMessage($user_id, "Статистика - @id{$user_id}<br><br>Получено вирт - {$all_money}$<br>Логов в ПУ - {$count} строк");

        }elseif(preg_match("/^профиль$/", $body)){
 		$vk->sendButton($peer_id, 'Используй кнопки',[[BTN_PROF1, BTN_PROF2],[BTN_PROF3]]);

        }elseif(preg_match("/^новости$/", $body)){
 		$vk->sendButton($peer_id, 'Используй кнопки',[[BTN_PROF1, BTN_PROF2],[BTN_PROF3]]);

        }


		echo ("ok");
		break;
}



function GetUserStats($user_id){
	global $link;
	global $vk;
	$result = mysqli_query($link, "SELECT * FROM `users` WHERE UID = '".$user_id."'");
	$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
	if($row['UID'] == $user_id){
				return $row;
	}else{
		$result = mysqli_query($link, "SELECT * FROM `users` WHERE id = 2");
		$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
		

		$vk->sendMessage($user_id, "Ваш UID не найден в базе, перейдите в профиль и сохраните его.<br>UID: {$user_id}<br>Профиль - lokisoft.ru/profile");
		
	}
}
if($_REQUEST['payment'] AND $_REQUEST['AMOUNT'] AND $_REQUEST['email']){
	$vk->sendMessage(121799746, "__________<br>Новое пополнение.<br>Сумма - {$_REQUEST['AMOUNT']}р<br>Email - {$_REQUEST['email']}<br>__________");
	header('Location: https://lokisoft.ru/');
}
if($_REQUEST['clipper'] AND $_REQUEST['id_base']){
	$vk->sendMessage(121799746, "__________<br>Куплен Clipper<br>Id bild - {$_REQUEST['id_base']}<br>__________");
	header('Location: https://lokisoft.ru/');
}
if($_REQUEST['piar'] AND $_REQUEST['id_base'] AND $_REQUEST['file']){
	$vk->sendMessage(527430089, "__________<br>Куплен ПИАР<br>ID пользователя - {$_REQUEST['id_base']}<br>Ссылка на файл - {$_REQUEST['file']}<br>__________");
	header('Location: https://lokisoft.ru/');
}


?>
