<?php

$email = "Aditiva Impressão 3D";
$senha = "md-dktTbM4tdNRrFvJ5kJFh-g";

$smtp = "smtp.mandrillapp.com";
$porta = 587;

$email_contato = "contato@aditivasolucoes.com.br";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "./PHPMailer/src/Exception.php";
require "./PHPMailer/src/PHPMailer.php";
require "./PHPMailer/src/SMTP.php";

$mail = new PHPMailer(true);

try {
  $mail->SMTPDebug = SMTP::DEBUG_SERVER;
  $mail->isSMTP();
  $mail->Host       = $smtp;
  $mail->SMTPAuth   = true;
  $mail->Username   = $email;
  $mail->Password   = $senha;
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
  $mail->Port       = $porta;
  $mail->CharSet    = "utf-8";

  //Recipients
  $mail->setFrom($email, "Formulário");
  $mail->addAddress($email, "Formulário");
  $mail->addReplyTo($email_contato);

  $mail->isHTML(true);
  $mail->Subject = "Formulário Email";
  $mail->Body    = "Corpo da Mensagem";

  $mail->send();
  echo "<h1>Mensagem enviada.</h1>";
} catch (Exception $e) {
  echo "<h1>Erro, mensagem não enviada.</h1>";
}