<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid input. Please check your details.";
        exit;
    }

    $to = "info@codesprout.ac.ke";
    $subject = "New Contact Form Submission";
    $headers = "From: $name <$email>\r\nReply-To: $email\r\n";

    $body = "You have received a new message from the contact form:\n\n";
    $body .= "Name: $name\nEmail: $email\n\nMessage:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message failed to send.";
    }
}
?>
