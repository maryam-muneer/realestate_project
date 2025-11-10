 <?php
include('connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        header("Location: ../dashboard.html");
        exit();
    } else {
        echo "<script>alert('Invalid Username or Password!'); window.location.href='../login.html';</script>";
    }
}
?>