<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Content-Type");
	require_once('./mail/class.phpmailer.php');
		
	if(!isset($_POST['email'])) die("Forbidden.");

	$subject = 'Mensaje en sitio web de '.$_POST['email'];
	$messageText =	'Nombre: '.$_POST['name'].'<br>'.
					'Telefono: '.$_POST['phone'].'<br>'.
					'Correo: <a href="mailto:'.$_POST['email'].'">'.$_POST['email'].'</a><br>'.
					'Mensaje: '.$_POST['message'].'<br>';
    
    sendMail($messageText, $subject);
    
    echo "success";

    function sendMail($body, $title){
        
		error_log("\n\n\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SENDING MAIL >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		error_log("title:".$title);
		error_log("body:".$body);
		
		$mail = new PHPMailer();
		$mail->CharSet="UTF-8";
		$mail->AddReplyTo("ventas@tecnipres.com","ventas@tecnipres.com");
		$mail->SetFrom('ventas@tecnipres.com', "ventas@tecnipres.com");
		$mail->AddBCC("ferbuenob@gmail.com" , "Fernando Bueno");
		$mail->AddAddress("ventas@tecnipres.com", "ventas@tecnipres.com");
		$mail->Subject    = $title;
		$mail->AltBody    = "To view the message properly, please use an HTML compatible email viewer.";
		$mail->MsgHTML($body);                                           
		$mail->Send();
    }
    
?>