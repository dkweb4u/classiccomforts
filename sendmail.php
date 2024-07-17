<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if(isset($_POST['send'])){
    


    if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['phone']) && !empty($_POST['subject'])){
        
        $mail = new PHPMailer(true);

    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
  
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'mail.classiccomforts.in';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'webinfo@classiccomforts.in';                     //SMTP username
        $mail->Password   = '}GymTT*MHTYV';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
        //Recipients
        $mail->setFrom('webinfo@classiccomforts.in', 'Info');
    
    
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
      
        $mail->Subject = 'Quote From Classic Comfort Hotel ';

        $mail->addAddress('classiccomforthotel@gmail.com', 'Admin');     //Add a recipient
        
        $mail->Body    = "<p><b>Name: </b>".$_POST['name']."</p>
        <p><b>Email: </b>".$_POST['email']."</p>
        <p><b>Phone: </b>".$_POST['phone']."</p>
        <p><b>PG: </b>".$_POST['subject']."</p>
        <p><b>Message: </b>".$_POST['message']."</p>";

        $mail->send();

        echo ' <script>
        alert("Mail Sent Successfully");
        location.replace(document.referrer);
        </script>';


    }
    catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
       }

    }

    else{
        echo ' <script>
        alert("Please Fill All Fields");
        location.replace(document.referrer);
        </script>';

        die();
    }

}


else{
    echo '<h2 style="display: block; margin: 20px auto; width:fit-content;"> Sorry No Data </h2> <a href="https://arakerepgladies.com/"  style="display: block; margin: 20px auto; width:fit-content;"> Back to Home</a>';
  }