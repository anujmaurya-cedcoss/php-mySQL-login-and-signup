<?php
session_start();
    include('config.php');
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];
    $sql = "SELECT * FROM user_table WHERE `email` = '$mail' AND `password` = '$pass'";
    $result = mysqli_query($conn, $sql);
    echo "<h3>Output from Database : </h3>";
    echo "<br>";
    $res = "<table class = 'text-center'> <thead>
                 <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Password</th>
                 </tr>";
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $res .= "<tr>
                <td>".$row['id']."</td>
                <td>".$row['name']."</td>
                <td>".$row['email']."</td>
                <td>".$row['password']."</td>
                </tr>";
        }
    } else {
      $res = "<h3>0 results</h3>";
    }
    $res .= "</thead></table>";
    
    $_SESSION['output'] = $res;
    header('location: ./display_output.php');
?>    