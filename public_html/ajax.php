<?php

error_reporting(E_ALL);

// Запускаепт функцию из js пример функции в catalog-item.html
$response = array( "status" => false, "run_script" => "alerted" );

// Ошибка под формой
$response = array( "status" => false, "error_message" => "Неизвестная ошибка на сервере" );

// Ошибка под полями
$response = array( "status" => false, "errors" => array(
    "name" => "Неизвестная ошибка на сервере",
    "email" => "Неизвестная ошибка на сервере",
    "phone" => "Неизвестная ошибка на сервере"
) );

exit( json_encode( $response, 64 | 256 ) );

// 

// [24.10.16, 23:40:45] Dmitriy Tolstikoff: {"status":"false","errors":{"error":"error"}}
// [24.10.16, 23:43:07] Dmitriy Tolstikoff: такой ответ норм?? твой скрипт прочитать сможет ??
// $response = array( "status" => "false", "errors" => array( "error" => "error" ) );
// {"status":"false","errors":{"error":"\u00ed\u00e5\u00e8\u00e7\u00e2\u00e5\u00f1\u00f2\u00ed\u00e0\u00ff
//  \u00ee\u00f8\u00e8\u00e1\u00ea\u00e0 \u00ed\u00e0 \u00f1\u00e5\u00f0\u00e2\u00e5\u00f0\u00e5"}}

// if ($controller == 'sendmessage')
// {
//     $status = false;
//     $errors = array();
//     $responce = array();

//     $name = isset($_POST['name']) ? $_POST['name'] : '';
//     $phone = isset($_POST['phone']) ? $_POST['phone'] : '';

//     if ($name == '')
//     {
//         $errors['name'] = 'name';
//     }

//     if ($phone == '')
//     {
//         $errors['phone'] = 'phone';
//     }
//     else
//     {
//         $_phone = str_replace(array('(', ')', '-', ' ', '+'), '', $phone);

//         if (strlen($_phone) !== 11)
//         {
//             $errors['phone'] = 'phone';
//         }
//     }

//     if (empty($errors))
//     {
//         $message = '<p>Имя: ' . $name . '</p><p>Телефон: ' . $phone . '</p>';
//         $emails = getfl('emails');
//         sendMail('Заказ консультации с сайта', $message, 'info@sk-zenit.ru', $emails, 'sD1VRF4J', 'smtp.timeweb.ru');
//         $status = true;

//         O('_mdd_consultation')->create(array(
//             's:name'        =>  $name,
//             's:phone'       =>  $phone,
//             'e:created'     =>  'NOW()',
//             'i:visible'     =>  1
//         ));
//     }

//     $responce['status'] = $status;
//     $responce['errors'] = $errors;

//     if ($status)
//     {
//         $responce['title'] = 'Спасибо';
//         $responce['message'] = 'Ваше сообщение было отправлено успешно. Спасибо.';
//     }

//     exit(
//         json_encode( $responce, 64 | 256 )
//     );
// }