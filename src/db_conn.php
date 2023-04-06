<?php
    include('config.php');
    if(!$conn) {
        die("connection was unsuccessful!");
    }
    // connected successfully
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];

    $curr_query = "INSERT INTO `user_table`(`name`, `email`, `password`)
                   VALUES('$name', '$mail', '$pass')";
    $result = mysqli_query($conn, $curr_query);
?>