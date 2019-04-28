<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Content-Type");
	require_once('./mail/class.phpmailer.php');
		
	$data = json_decode(file_get_contents('php://input'), true);

	if(!isset($data['email'])) die("Forbidden.");

	$subject = 'Mensaje en sitio web de '.$data['email'];
	$messageText =	'Nombre: '.$data['name'].'<br>'.
					'Telefono: '.$data['phone'].'<br>'.
					'Correo: <a href="mailto:'.$data['email'].'">'.$data['email'].'</a><br>'.
					'Mensaje: '.$data['message'].'<br>';
    
    sendMail($messageText, $subject);
    
    echo "success";

    function sendMail($body, $title){
        
		error_log("\n\n\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SENDING MAIL >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		error_log("title:".$title);
		error_log("body:".$body);
		
		$mail = new PHPMailer();
		$mail->CharSet="UTF-8";
		$mail->AddReplyTo("ventas@tecnipres.com","Ventas");
		$mail->SetFrom('ventas@tecnipres.com', "Ventas");
		$mail->AddBCC("ventas@tecnipres.com" , "Ventas");
		$mail->AddAddress("ventas@tecnipres.com", "Ventas");
		$mail->Subject    = $title;
		$mail->AltBody    = "To view the message properly, please use an HTML compatible email viewer.";
		$mail->MsgHTML($body);                                           
		$mail->Send();
    }
    
?>